<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{   
    #[Route('/form', name: 'show_form')]
    public function showForm(): Response
    {
        return $this->render('form/form.html.twig');
    }

    #[Route('/save-step', name: 'save_step', methods: ['POST'])]
    public function saveStep(Request $request, EntityManagerInterface $em, LoggerInterface $logger): Response
    {
        $data = json_decode($request->getContent(), true);
        $logger->info('Received data: ' . json_encode($data));
        $step = $data['step'];
        $userId = $data['userId'] ?? null;

        $user = $userId ? $em->getRepository(User::class)->find($userId) : new User();

        switch ($step) {
            case 1:
                $user->setFullName($data['fullName']);
                $user->setBirthDate(new \DateTime($data['birthDate']));
                break;
            case 2:
                $user->setStreet($data['street']);
                $user->setNumber($data['number']);
                $user->setZipCode($data['zipCode']);
                $user->setCity($data['city']);
                $user->setState($data['state']);
                break;
            case 3:
                $user->setPhone($data['phone']);
                $user->setMobile($data['mobile']);
                break;
        }

        $em->persist($user);
        $em->flush();

        return $this->json(['userId' => $user->getId()]);
    }
}