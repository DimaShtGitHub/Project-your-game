'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Questions', [{
      categoryId: 1,
      score: 200,
      text: 'В средневековой Японии все самураи, от сегуна (военного правителя) до простых солдат, получали продовольственные пайки, размер которых зависел от положения самурая. Какой продукт составлял эти пайки?',
      answer: 'Рис',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 1,
      score: 400,
      text: 'В некоторых ресторанах США за особо высокую плату можно попробовать жаркое из мяса этих доисторических животных. Мясо доставляется самолетами с Аляски.',
      answer: 'Мамонт',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 1,
      score: 600,
      text: 'Пословица этой страны утверждает, что для повара годится все, кроме Луны и ее отражения в воде.',
      answer: 'Китай',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 1,
      score: 800,
      text: 'Какой привычный всем нам продукт в японской национальной кухне заменяет соевый соус?',
      answer: 'Соль',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 1,
      score: 1000,
      text: 'В XIX веке Талейран говорил об этой стране, что в ней есть тридцать две религии, но только одно блюдо. Да и то плохое. Многие гурманы и сейчас готовы подписаться под этим высказыванием.',
      answer: 'США',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 2,
      score: 200,
      text: 'Этот напиток первым из европейцев попробовал испанский конкистадор Кортес.',
      answer: 'Какао',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 2,
      score: 400,
      text: 'В Древней Иудее это вредное насекомое считалось съедобным, так как по вкусу оно якобы напоминает креветку.',
      answer: 'Саранча',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 2,
      score: 600,
      text: 'Во время свидания Екатерины II с австрийским императором Иосифом никто не позаботился о трапезе августейших особ. Обед готовили князь Потемкин, принц Нассау и генерал Браницкий. Продолжите фразу Екатерины: «Никогда не приходилось иметь столь блистательной прислуги и столь...» ',
      answer: 'плохого обеда',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 2,
      score: 800,
      text: 'На пирах в средневековой Руси, жалуя гостя хлебом, царь выражал гостеприимство и расположение, а пожалование какого продукта выражало царскую любовь?',
      answer: 'Соли',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 2,
      score: 1000,
      text: 'Этот великий полководец античности считал, что «лучшие повара - для завтрака - ночной переход, для обеда - скудный завтрак».',
      answer: 'Александр Македонский',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 3,
      score: 200,
      text: 'Это легкое воздушное пирожное получило название от французского слова «поцелуй».',
      answer: 'Безе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 3,
      score: 400,
      text: 'Итальянское название этого блюда можно перевести на русский язык словом «тесто». А как его называем мы?',
      answer: 'Макароны',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 3,
      score: 600,
      text: 'Татары, узбеки и казахи называют его «катык», грузины - «мацони», таджики - «чургот», египтяне - «лебен», а как его называют в Турции, Греции, Румынии и во всей Европе?',
      answer: 'Йогурт',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 3,
      score: 800,
      text: 'По мнению французов, он может украсить любое блюдо.',
      answer: 'Гарнир',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      categoryId: 3,
      score: 1000,
      text: 'Вспомните один музыкальный термин и попробуйте сказать по-французски буквально «кушанье из разных сортов мяса и зелени». ',
      answer: 'Попурри',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Questions', null, {});

  }
};
