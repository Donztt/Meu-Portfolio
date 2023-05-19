import translationsEn from '../Translations/en.json';
import translationsPt from '../Translations/pt.json';

export function Translations(language){
    return  language === 'en' ? translationsEn : translationsPt;
}
