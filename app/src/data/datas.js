const datas = [
  {
    id: 1,
    title: 'Titre de la scène',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus nec diam sed tincidunt. Morbi in ante vitae ipsum volutpat bibendum. In purus turpis, venenatis id nisl vitae, maximus pulvinar nisi. Maecenas id blandit ante. Etiam eu risus mauris. Morbi varius facilisis massa, quis mattis mi efficitur id. Nullam porttitor libero non imperdiet ullamcorper. Mauris tortor justo, molestie ac feugiat sit amet, cursus quis tellus. Aliquam quis enim eget nibh tincidunt ultrices eget vitae neque. Aenean eget euismod nisl.',
    descriptionF: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus nec diam sed tincidunt. Morbi in ante vitae ipsum volutpat bibendum. In purus turpis, venenatis id nisl vitae, maximus pulvinar nisi. Maecenas id blandit ante. Etiam eu risus mauris. Morbi varius facilisis massa, quis mattis mi efficitur id. Nullam porttitor libero non imperdiet ullamcorper. Mauris tortor justo, molestie ac feugiat sit amet, cursus quis tellus. Aliquam quis enim eget nibh tincidunt ultrices eget vitae neque. Aenean eget euismod nisl.',
    actions: [
      {
        text: 'Je prends mon arme.',
        stat: 'determination',
        // optionnel
        stat2: 'finesse',
        targetSuccess: 6,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'vitre cassée',
        targetFailure: 10,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
      {
        text: 'Je prends mon arme.',
        stat: 'determination',
        // optionnel
        stat2: 'finesse',
        targetSuccess: 6,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'vitre cassée',
        targetFailure: 10,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
      {
        text: 'Je prends mon arme.',
        stat: 'determination',
        // optionnel
        stat2: 'finesse',
        targetSuccess: 6,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagSuccess: 'vitre cassée',
        targetFailure: 10,
        // optionnel, string qui passe par le middleware et sera ajoutée au state avec valeur à true
        flagFailure: 'blessure,',
      },
    ],
    background: 'harkonnens_hq.png',
    image: 'baron.jpg',
    sound: 'harkonnens_house.mp3',
  },
];

export default datas;
