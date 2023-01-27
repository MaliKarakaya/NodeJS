const yargs = require('yargs');

yargs.command({
    command: 'ekle',
    describe: 'Yeni kişi eklemeye yarar',
    builder: {
        isim: {
            describe: 'Eklenecek kişi adı',
            demandOption: true,
            type: 'string'
        },
        tel: {
            describe: 'Eklenecek kişi telefon numarası',
            type: 'string'
        }
    },
    handler(argv) {
        console.log(`Isim: ${argv.isim}, Tel no: ${argv.tel}`);
    }
});

yargs.command({
    command: 'sil',
    describe: 'Kişiyi siler',
    builder: {
        isim: {
            describe: 'Silinecek kişi adı',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(`Silinecek kişi adı: ${argv.isim}`);
    }
});

yargs.command({
    command: 'listele',
    describe: 'Tüm rehberi listeler',
    handler(argv) {
        console.log('Tüm rehber listelenecek');
    }
});

yargs.parse();
