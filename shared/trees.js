// Чтобы добавить породу — добавьте строку. Больше ничего менять не нужно.
// en — описание для CLIP (чем точнее, тем лучше), ru — название для пользователя.
export const TREES = [
  { id: 'birch', ru: 'Берёза', en: 'birch tree with white bark' },
  { id: 'oak', ru: 'Дуб', en: 'oak tree' },
  { id: 'pine', ru: 'Сосна', en: 'pine tree' },
  { id: 'spruce', ru: 'Ель', en: 'spruce tree' },
  { id: 'maple', ru: 'Клён', en: 'maple tree' },
  { id: 'apple', ru: 'Яблоня', en: 'apple tree' },
  { id: 'linden', ru: 'Липа', en: 'linden tree' },
  { id: 'poplar', ru: 'Тополь', en: 'poplar tree' },
  { id: 'willow', ru: 'Ива', en: 'willow tree' },
  { id: 'chestnut', ru: 'Каштан', en: 'chestnut tree' },
  { id: 'ash', ru: 'Ясень', en: 'ash tree' },
  { id: 'elm', ru: 'Вяз', en: 'elm tree' },
  { id: 'rowan', ru: 'Рябина', en: 'rowan tree' },
  { id: 'larch', ru: 'Лиственница', en: 'larch tree' },
  { id: 'fir', ru: 'Пихта', en: 'fir tree' },
  { id: 'cherry', ru: 'Вишня / черешня', en: 'cherry tree' },
  { id: 'alder', ru: 'Ольха', en: 'alder tree' },
  { id: 'beech', ru: 'Бук', en: 'beech tree' },
  { id: 'palm', ru: 'Пальма', en: 'palm tree' },
  { id: 'other', ru: 'Другая порода', en: 'some other tree' },
];

// Примеры «не дерева» — нужны, чтобы модель могла ответить «деревьев нет».
export const NON_TREES = [
  'a photo with no trees', 'a photo of a building', 'a photo of a person', 'a photo of a room indoors',
  'a photo of a car', 'a photo of a street', 'a photo of the sky', 'a photo of food',
  'a photo of an animal', 'a photo of a flower', 'a photo of a bush', 'a photo of grass', 'a photo of a document',
];

export const treePrompt = (t) => `a photo of ${t.en}`;
