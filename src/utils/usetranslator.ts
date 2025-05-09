/* Sample Data
export const title = {
  titleEn: "Our success in numbers",
  titleRu: "Наш успех в цифрах",
  titleIn: "संख्या में हमारी सफलता",
};

export const benefitsList = [
  {
    icon: benefit1,
    titleEn: "Automatic posting and deleting of promo posts",
    titleRu: "Автоматическое размещение и удаление промопостов",
    titleIn: "स्वचालित पोस्टिंग और प्रोमो पोस्ट को हटाना",
  },
];
*/

/**
 * Implementation
 *
 * const data = useTranslator(router.locale, benefitsList);// locale from router and array
 * const content = useTranslator(router.locale, title); // locale from router and object
 */

/**
 *
 * @param locale
 * @param jsonObj
 * @returns Object<[key: string]: any>
 */

function useTranslator(
  locale: string,
  jsonObj: Array<{ [key: string]: any }> | { [key: string]: any }
) {
  /**
   * The Locale Have to be two letters. Changing the First letter to uppercase as the locale in the key will have the first letter uppercase
   */
  const language = locale[0].toUpperCase() + locale[1];
  const regex = new RegExp(`(${language})$`);

  // Regex for UTS Locale Identifiers
  const localePattern =
    /\b[a-z]{2,3}(_[A-Z]{2})?(_[a-zA-Z0-9]{4})?(_[a-zA-Z0-9]{2,3})?\b/;

  if (Array.isArray(jsonObj)) {
    /**
     * When the Content Type is an Array
     */
    return jsonObj.map((item) => {
      const newItem: { [key: string]: any } = {};
      for (const [key, value] of Object.entries(item)) {
        if (key.includes(language)) {
          const newKey = key.replace(regex, '');
          newItem[newKey] = value;
        } else {
          // Taking the Only last two character of the key to test the key with regex
          const lastTwoChars = key.slice(-2);
          if (localePattern.test(lastTwoChars)) {
            newItem[key] = value;
          }
        }
      }
      return newItem;
    });
  } else if (typeof jsonObj === 'object') {
    // If the data is an Object
    //Filter Object with key contains the passed locale
    const objArr: string[] = Object.keys(jsonObj);
    // Filtering the object that has the key matched to the language
    const filteredArr: string[] = objArr.filter((key) =>
      key.includes(language)
    );
    const filteredObj: { [key: string]: any } = filteredArr.reduce(
      (obj, key) => {
        return Object.assign(obj, {
          [key]: jsonObj[key],
        });
      },
      {}
    );
    /**
     * Validator
     * If the filtered object is empty, then that's mean the object has mismatch with the structure, or there is something wrong with locale spelling in the object key
     */
    // remove the locale from the ending of each keys

    const response: { [key: string]: any } = {};

    for (const key in filteredObj) {
      if (filteredObj.hasOwnProperty(key)) {
        const newKey = key.replace(regex, '');
        response[newKey] = filteredObj[key];
      }
    }

    if (Object.keys(response).length === 0) {
      console.error(
        'Translator Error: The object has mismatch with the structure, or there is something wrong with locale spelling in the object key'
      );
    }
    return response;
  } else {
    console.error(
      'The Data you have passed is neither an object, nor an Array. Please pass an Array or an Object'
    );
  }
}

export default useTranslator;

