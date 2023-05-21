import translationsEn from '../Translations/en.json';
import translationsPt from '../Translations/pt.json';
import translationsEs from '../Translations/es.json';

export function Translations(language){
    switch (language) {
        case 'en':
            return translationsEn;
        case 'pt':
            return translationsPt;
        case 'es':
            return translationsEs;
        default:
          return translationsPt;
      }
}
