const Encore = require('@symfony/webpack-encore');

Encore
    // Diretório de saída
    .setOutputPath('public/build/')
    // Caminho público usado pelo servidor web para acessar os arquivos de saída
    .setPublicPath('/build')
    // Entrada principal do aplicativo
    .addEntry('app', './assets/app.js')
    // Limpar o diretório de saída antes de cada build
    .cleanupOutputBeforeBuild()
    // Habilitar mapas de fonte durante o desenvolvimento
    .enableSourceMaps(!Encore.isProduction())
    // Habilitar a versão dos arquivos (nome dos arquivos contém hash)
    .enableVersioning(Encore.isProduction())
    // Habilitar Vue Loader
    .enableVueLoader(() => {}, { version: 3 })
    // Habilitar Stimulus Bridge
    .enableStimulusBridge('./assets/controllers.json')
    // Dividir os arquivos de entrada em chunks menores para carregamento otimizado
    .splitEntryChunks()
    // Habilitar notificações de build (por ex., quando o build falha)
    .enableBuildNotifications()
    // Adicionar suporte ao SASS/SCSS
    .enableSassLoader()
    // Adicionar suporte ao PostCSS
    .enablePostCssLoader()
    // Adicionar suporte a jQuery
    .autoProvidejQuery()
    // Habilitar o uso de um chunk de runtime único
    .enableSingleRuntimeChunk()
;

// Verificar se o diretório existe antes de copiar os arquivos
const fs = require('fs');
if (fs.existsSync('./assets/static')) {
    Encore.copyFiles({
        from: './assets/static',
        to: 'static/[path][name].[ext]',
    });
}

module.exports = Encore.getWebpackConfig();
