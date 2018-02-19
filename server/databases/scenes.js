/* eslint-disable quotes */
module.exports = [
  // Le copier/coller commence ici
  {
    id: 0,
    title: 'example-scene',
    description: `
    > Ceci est une scène d'exemple qui ne sera jamais vue en jeu. Le texte doit être mis entre backquotes afin de vous permettre de sauter des lignes. Mettez un > au début de chaque paragraphe.

    > Comme ça par exemple.
    Décrivez ce que voit, sent et entend le personnage, puis demandez lui à la fin ce qu'il décide de faire.

    `,
    actions: [
      {
        text: `Ceci est une action basique. Elle n'est associée à aucune statistique et "réussira" toujours, emmenant le joueur à la scène indiquée dans "targetSuccess".`,
        targetSuccess: 0,
      },
      {
        text: `Voilà un modèle d'action un peu plus complexe. C'est une action qui a une chance d'échouer en fonction de la statistique "Finesse" du personnage qu'incarne le joueur. Si cela arrive, il sera redirigé vers la scène dont l'ID figure dans "targetFailure"`,
        stat: 'finesse',
        targetSuccess: 0,
        targetFailure: 0,
      },
    ],
  },
  // et se termine là
  {
    id: 1,
    title: 'intro-NL-01',
    description: `
    > De : jacob-001@stgeorgesfundation.com
    > Destinataire : <REDACTED>
    > Objet : Opération Deus Vult

     [Mon enfant,

     L'heure est grave. La megacorporation Pygmalion a définitivement rejoint les rangs des impies, malgré toute nos tentatives de sauver leurs âmes de la damnation éternelle.
    Dans les profondeurs de leur laboratoire secret est née une abomination, un organisme planifié et synthétique, façonné de la main de l'homme. En agissant en démiurge, ils ont violé les lois de la nature.

    Cette "Intelligence artificielle" est condamnée à exister loin de la lumière de notre Seigneur tout puissant et doit être détruite.

    Tu as été choisi pour cette tâche, élu parmis nos fidèles pour porter le fer et le feu dans cette nouvelle Sodome.
    Voilà maintenant une dizaine d'années que tu nous sers fidèlement.
    Ton âme est pure et ton corps, une arme forgée pour la guerre.
    Lève toi, mon enfant !
    Lève toi et apporte la lumière dans les ténèbres !
    Que ton glaive s'abatte sur ces infidèles !
    Que leur sang soit versé au nom de notre sauveur !
    Ne laisse derrière toi que des cendres. ]

    > Vous trouvez en pièce jointe de ce message l'adresse de votre première cible, un employé de Pygmalion disposant d'une carte d'accès au laboratoire secret de la megacorporation. Soeur Anastasie est parvenue à vous faire entrer au sein de l'enclave corporatiste avant de vous conduire devant le bâtiment résidentiel où se trouve votre homme. Vous avez vingt minutes pour l'abattre, récupérer sa carte et retourner dans le véhicule avant que l'équipe de sécurité n'arrive sur les lieux. Ce sera largement suffisant.

    > [Votre personnage appartient à la faction des Neo-Luddites. Entraîné au maniement des armes depuis sa plus tendre enfance et élevé dans le fanatisme le plus total, vous êtes un météore traversant l'existence sans se soucier de ce que les autres pourraient bien penser ou ressentir, et seule la mort pourra vous arrêter définitivement.
    A ce titre, votre statistique la plus élevée est la statistique Détermination, représentée par le signe ᨒ. Les actions précédées de cette icône ont pour vous plus de chance de réussir que les autres. ]

    > Le silence du bâtiment n'est troublé que par le souffle sporadique de la climatisation défectueuse. Après avoir gravi les marches de l'escalier, vous êtes arrivé devant la porte. Après avoir tenté de tourner la poignée discrètement, vous vous rendez compte qu'elle est fermée.
    Il est temps d'entrer en scène. Que faites vous ?

    `,
    image: '/images/test-image.jpg',
    imageDescription: 'Destination cible',
    actions: [
      {
        text: 'Dégainer votre arme, puis enfoncer la porte.',
        stat: 'determination',
        targetSuccess: 2,
        targetFailure: 3,
      },
      {
        text: 'Tenter de crocheter la serrure',
        stat: 'finesse',
        targetSuccess: 5,
        targetFailure: 6,
      },
      {
        text: 'Action de test : Vous couper le doigt avec une feuille de papier',
        targetSuccess: 16,
      },
    ],
  },
  {
    id: 2,
    title: 'intro-NL-doorsuccess',
    description: `
    > Après quelque coups d'épaule, la porte finit par céder dans un craquement et vous entrez dans le domicile du programmeur.

    > Ca sent le tabac froid et le liquide vaisselle. Sur le canapé, une valise ouverte remplie de vêtements. Derrière, la silhouette de votre cible se découpe dans la lueur blafarde des trois moniteurs installés sur le bureau.

    > Il brandit un pistolet à bout de bras dans votre direction, tremblant comme une feuille.
    Votre oeil expert remarque que la sécurité est toujours enclenchée.
    Erreur fatale. `,
    success: true,
    actions: [
      {
        text: 'Lui faire regretter.',
        targetSuccess: 4,
      },
    ],
  },
  {
    id: 3,
    title: 'intro-NL-doorfail',
    description: `La porte tremble violemment mais refuse de s'ouvrir. Vous entendez un glapissement effrayé de l'autre côté.`,
    actions: [
      {
        text: `Prendre de l'élan et heurter la porte de toute vos forces`,
        stat: 'determination',
        targetSuccess: 2,
        targetFailure: 3,
      },
    ],
  },
  {
    id: 4,
    title: 'intro-NL-programmerdeath',
    description: `
    >Vous levez votre arme et il presse la gâchette. Son pistolet émet un petit cliquetis, le vôtre une détonation qui retentit dans la pièce. Le programmeur s'effondre comme une poupée de chiffon

    > En fouillant le cadavre de l'informaticien, puis sa valise, vous finissez par trouver la carte d'accès que vous êtes venu chercher.

    > Plus bas, soeur Anastasie klaxonne pour vous inciter à vous dépêcher.`,
    actions: [
      {
        text: `Descendre les escaliers en trombe et rejoindre le véhicule.`,
        targetSuccess: 8,
      },
    ],
  },
  {
    id: 5,
    title: 'intro-NL-lockpick-success',
    description: `
    > Vous sortez votre rossignol électronique et commencez à oeuvrer sur la serrure sans faire de bruit. Par chance, c'est un ancien modèle qui ne dispose d'aucune des sécurités moderne. Vous ouvrez la porte sans un bruit, apercevant une silhouette de dos en train de glisser à la hâte des chemises froissées dans une valise en cuir.

    > C'est votre homme.`,
    actions: [
      {
        text: `L'abattre.`,
        targetSuccess: 7,
      },
    ],
  },
  {
    id: 6,
    title: 'intro-NL-lockpick-failure',
    description: `
      > Vous sortez votre rossignol électronique et commencez à oeuvrer sur la serrure sans faire de bruit. Malheureusement, c'est un ancien modèle, avec lequel vous n'êtes pas familier.

      > Après quelques tentatives infructueuses, vous décidez qu'il est temps de varier votre approche.

      [Cette action utilisait votre statistique "Finesse" et avait beaucoup moins de chance de réussir.]
`,
    actions: [
      {
        text: `Vous n'allez pas laisser une porte vous narguer. L'enfoncer.`,
        stat: 'determination',
        targetSuccess: 2,
        targetFailure: 3,
      },
    ],
  },
  {
    id: 7,
    title: 'intro-NL-lockpick-death',
    description: `
> Vous ajustez votre visée, puis tirez dans son dos. La balle traverse sa colonne vertébrale et le programmeur s'effondre comme une poupée de chiffon. Après cette démonstration de bravoure, vous retournez l'appartement sens dessus-dessous pour récupérer ce que vous êtiez venu chercher.

> En fouillant le cadavre de l'informaticien, puis sa valise, vous finissez par trouver la carte d'accès dans la poche d'une de ses chemises.

> Plus bas, soeur Anastasie klaxonne pour vous inciter à vous dépêcher.`,
    actions: [
      {
        text: `Descendre les escaliers en trombe et rejoindre le véhicule.`,
        targetSuccess: 8,
      },
    ],
  },
  {
    id: 8,
    title: 'intro-NL-end',
    description: `
      > Le ciel est recouvert de nuage menaçants, il est évident que la pluie ne va pas tarder à tomber. A cette heure, l'enclave corporatistes grouile encore de monde. Dans une ruelle près d'une boîte de nuit, vous apercevez une escouade de sécurité Pygmalion en train de pousser un employé contre un mur avant de le fouiller sous la menace d'une arme.

      > Anastasie se faufile sans peine à travers le trafic tout en vous répétant le contenu du mail reçu plus tôt. Elle vous rappelle que vous n'aurez qu'une heure à partir de votre entrée dans le laboratoire pour être extrait, et vous rappelle le mot de passe activant votre bombe corticale.

      > Si vous veniez à être pris, il vous suffira de dire "DEUS IO VULT" pour qu'elle explose, vous permettant de mourir en martyr —et accessoirement d'effacer les preuves.
  `,
    actions: [
      {
        text: `To be continued.`,
        targetSuccess: 1,
      },
    ],
  },
  {
    id: 9,
    title: 'intro-FLS-01',
    description: `
      > De : artemis@styxnet.com
      > Destinataire : <REDACTED>
      > Objet : Opération RailRoad

      [Yo ! Tu reçois cet e-mail parce que tu as été choisi par notre campagne de crowdfunding pour participer à l'opération Railroad aux frais de la princesse. D'après un leak récent, ces bâtards de la megacorporation Pygmalion ont créé une intelligence artificielle doué de conscience et la retiennent prisonnière dans un laboratoire secret.

      Ce laboratoire est situé sous les locaux d'une compagnie d'assurance qui sert de société écran. On veut que tu parviennes à trouver l'endroit ou elle est retenue, que tu télécharges l'IA sur un disque dur qu'on te fournira, et que tu la ramènes à notre agent qui se chargera de la libérer sur le Net.
      En échange, tu auras droit à notre gratitude éternelle, accompagnée d'un beau paquet de pognon.
      La plupart des gugusses qui vont se trouver sur ta route ne font que leur travail, alors évite les bain de sang, tu veux ?
      Bon courage !
      Artemis.]

      > Vous trouvez en pièce jointe de ce message la localisation d'une cache de matériel, accompagnée par l'adresse d'un employé de Pygmalion mis au placard qui dispose d'une carte d'accès au laboratoire secret. Il va falloir entrer chez lui par effraction et se procurer le passe. Un jeu d'enfant pour un individu de votre calibre.

      > [Votre personnage appartient au Front de Libération des Synthétiques.
      Agile et rusé, vous avez la manie de vous retrouver dans des endroits que vous n'êtes pas sensé arpenter et d'en ressortir sans vous faire remarquer.
      A ce titre, sa statistique la plus élevée est la statistique Finesse, représentée par le signe ༄.
      Les actions précédées de cette icône ont pour vous plus de chance de réussir que les autres. ]

      > Le silence n'est troublé que par le souffle sporadique de la climatisation défectueuse. Il est trois heures du matin, vous avez oublié vos cigarettes et vous êtes actuellement accroché à la gouttière d'un bâtiment vétuste à trente mètres du sol.
      Alors qu'une fine pluie se met à tomber, une partie de vous aimerait savoir à quel moment de votre existence vous vous êtes fourvoyé à ce point.

      > Il ne sera pas compliqué de grimper sur le balcon. Récupérer la carte d'accès, cependant,  demandera un peu plus de doigté.

      `,
    actions: [
      {
        text: `Tenter d'entrer dans l'appartement sans vous faire remarquer.`,
        stat: 'finesse',
        targetSuccess: 10,
        targetFailure: 11,
      },
    ],
  },
  {
    id: 10,
    title: 'intro-FLS-balcony-success',
    description: `
      > Lestement, vous vous glissez jusqu'à la porte vitrée et jettez un oeil à l'intérieur de l'appartement. Sur un canapé se trouve une valise ouverte contenant des vêtements et surtout le précieux sésame que vous êtes venu chercher. Un gros chat noir dort paisiblement sur une pile de chemise.

      > Vous entendez de l'eau couler dans la salle de bain, et quelqu'un qui chante (mal). On dirait que la voie est libre.
  `,
    actions: [
      {
        text: `Faire une copie de la carte sans réveiller le chat.`,
        stat: 'finesse',
        targetSuccess: 14,
        targetFailure: 13,
      },
      {
        text: `Utiliser votre drone pour scanner la carte à distance.`,
        stat: 'intellect',
        targetSuccess: 17,
        targetFailure: 18,
      },
    ],
  },
  {
    id: 11,
    title: 'intro-FLS-balcony-failure',
    description: `
        > Lestement, vous vous glissez jusqu'à la porte vitrée et jettez un oeil à l'intérieur de l'appartement. Sur un canapé se trouve une valise ouverte contenant des vêtements et surtout le précieux sésame que vous êtes venu chercher.

        > Vous entendez de l'eau couler dans la salle de bain, et quelqu'un qui chante (mal).

        > Soudainement, un chat se met à miauler à côté de vous. Vous entendez la douche s'arrêter et une voix crier : "Ferme-là !"

        [Votre action a échoué. Cela n'aura aucune conséquence grave dans ce tutoriel, mais plusieurs échecs successifs peuvent entraîner des blessures ou même la fin de la partie selon les circonstances.]
    `,
    actions: [
      {
        text: `"S'occuper" du chat.`,
        targetSuccess: 12,
      },
    ],
  },
  {
    id: 12,
    title: 'intro-FLS-cat',
    description: `
          > Vous êtes un professionnel, toujours paré à toute les éventualités. Lentement, vous approchez de votre main de votre sac à dos, et tout en regardant le chat dans les yeux, vous en ressortez...

          > Un biscuit pour chien. Espérons qu'il n'a pas de goût de luxe. Vous le posez au sol et le matou commence à grignoter le biscuit en ronronnant. La voie est libre.
      `,
    actions: [
      {
        text: `Faire une copie de la carte d'accès.`,
        stat: 'finesse',
        targetSuccess: 14,
      },
    ],
  },
  {
    id: 13,
    title: 'intro-FLS-sofa-fail',
    description: `
          > Les grands yeux verts du chat s'ouvrent et le bougre commence à miauler !

          > La douche s'arrête de couler, et de la salle de bain jaillit un cri : "Ferme-là !".

          > Il va falloir agir vite.
      `,
    actions: [
      {
        text: `"S'occuper" du chat.`,
        targetSuccess: 12,
      },
    ],
  },
  {
    id: 14,
    title: 'intro-FLS-scan-pass',
    description: `
        > Vous terminez de scanner les informations de la carte avant de les enregistrer sur votre smartphone. Une fois au calme vous pourrez en faire une copie.

        > Pendant l'opération de décryptage, vous récupérez un paquet de cigarette à moitié vide posé sur une table basse et la glissez dans vos affaires.

        > Vous vous assurez de n'avoir rien laissé de compromettant derrière vous avant de refermer la porte vitrée.
    `,
    actions: [
      {
        text: `Disparaître dans la nuit.`,
        targetSuccess: 15,
      },
    ],
  },
  {
    id: 15,
    title: 'intro-FLS-end',
    description: `
          > Vous glissez le long de la gouttière avant de retourner dans votre véhicule. Votre chauffeur pour ce soir est un grand type qui ne pose pas de question, exactement comme vous les aimez.

          > La pluie continue de tomber sur le pare-brise alors que la voiture traverse la ville dans le plus grand des silences. Vous ouvrez la fenêtre côté passager et vous allumez une cigarette, profitant du calme avant la tempête.

          > Vous finissez par apercevoir la devanture de la compagnie d'assurance. Si vos informations sont correctes, c'est à l'intérieur de ce bâtiment que se trouve l'entrée du laboratoire secret.

          > La nuit va être longue.
      `,
    actions: [
      {
        text: `To be continued...`,
        targetSuccess: 9,
      },
    ],
  },
  {
    id: 16,
    title: 'gros-teube',
    wound: true,
    description: `
    > Bravo, champion, vous venez de vous faire mal.
        `,
    actions: [
      {
        text: `Encore un petit coup ?`,
        targetSuccess: 16,
      },
      {
        text: `Reprenons les choses sérieuses, s'il vous plaît.`,
        targetSuccess: 1,
      },
    ],
  },
  {
    id: 17,
    title: 'intro-FLS-drone-success',
    description: `
    > Vous dépliez votre drone avant de le connecter à votre téléphone grâce à la liaison bluetooth. Vos doigts glissent sur l'écran tactile alors que le petit appareil à hélice volète dans l'appartement comme un papillon de nuit d'une taille inhabituelle. Le module de scan s'active une fois le drone stabilisé, examinant la carte sous toute les coutures et enregistrant toute les informations qu'elle contient. Mission accomplie.
`,
    actions: [
      {
        text: `Terminer le scan et vous préparer à partir.`,
        targetSuccess: 14,
      },
    ],
  },
  {
    id: 18,
    title: 'intro-FLS-drone-fail',
    description: `
      > Vous dépliez votre drone avant de le connecter à votre téléphone grâce à la liaison bluetooth. Vos doigts glissent sur l'écran tactile alors que le petit appareil à hélice volète dans l'appartement comme un papillon de nuit d'une taille inhabituelle. A ce moment précis, le chat se réveille et décide de le chasser. Vous tournez en rond dans l'appartement en espérant qu'il finira par abandonner la poursuite, mais le chat finit par renverser une bouteille d'eau minérale sur le sol. Une voix issue de la salle de bain hurle : "Ferme-là !".
  `,
    actions: [
      {
        text: `Prendre des mesures radicales pour s'occuper de ce matou.`,
        targetSuccess: 12,
      },
    ],
  },
  {
    id: 19,
    title: 'intro-PYG-01',
    description: `
      > De : <Encrypted>
      > Destinataire : <REDACTED>
      > Objet : Opération Knightsbridge

      [Bonjour, agent.

      Il a été porté à mon attention qu'une fuite récente d'information a compromis l'emplacement de l'un de nos laboratoires qui n'existe pas.

      Dans ce laboratoire se trouve un projet d'intelligence artificielle forte qui n'existe pas non plus.
      Il va de soi que la Corporation ne peut pas tolérer de telles calomnies.
      Nos grands actionnaires se sont réunis hier soir afin de déterminer la marche à suivre, et je vous ai personnellement recommandé pour servir de fer de lance à l'opération Knightsbridge.

      Vos objectifs sont les suivants :

      - La source des ces informations doit, elle aussi, subir un déficit d'existence à la suite d'un plan social enrichi aux métaux lourds.

      - Si cette intelligence artificielle existait, il faudrait que quelqu'un se rende dans ce supposé centre de recherche afin de l'en extraire. Vous en trouverez l'adresse en pièce jointe. Il se situe dans les sous-sol d'une compagnie d'assurance.

      Vous avez toujours été un employé loyal et, plus important encore, un employé productif.
      L'échec ne sera pas permis sur cette mission.
      Bonne chance, agent. ]

          > Vous descendez de la berline noire après vous être recoiffé à l'aide du rétroviseur et avisez le bâtiment vétuste.
          En grimpant les marches, vous examinez rapidement votre équipement pour vérifier que rien ne manque.

          > Votre costume est impeccable et pare-balle.
          Votre cravate est bien ajustée et contient un monofilament en nanofibre de carbone capable d'étrangler n'importe qui sans froisser votre veste.
          Vos lunettes de soleil valent plus de deux mille crédits et corrigent votre vision en temps réel afin de vous assurer une acuité parfaite en toute circonstances.
          Alors que vous arrivez devant la porte, la présence rassurante d'un pistolet semi-automatique sous votre aisselle vous confirme ce que vous saviez déjà : Vous êtes un excellent produit.

          > Il est temps d'entrer en scène.
      `,
    actions: [
      {
        text: `Taper trois coups secs sur la porte`,
        targetSuccess: 20,
      },
    ],
  },
  {
    id: 20,
    title: 'intro-PYG-door',
    description: `
        > La porte s'ouvre lentement, et vous vous retrouvez nez à nez avec le canon d'une arme à feu. A l'autre bout de l'arme, le programmeur à qui vous êtes venu offrir une retraite anticipée. Il a l'air particulièrement nerveux.

        > Heureusement, il n'a, semble-t-il, pas pensé à désactiver la sécurité de son arme, ce qui vous confère un avantage non-négligeable si la situation venait à tourner au vinaigre.

        > [Votre personnage travaille pour la Corporation Pygmalion. Bardé de diplômes et de gadget, votre talent, accompagné d'une salutaire absence de morale, a fait de vous le défenseur ultime des intérêts capitalistes. L'existence est pour vous une série de puzzle à résoudre, et votre esprit acéré sait déceler les faiblesses de ce qui s'opposent à vous, hommes ou machines.
        A ce titre, votre statistique la plus élevée est la statistique Intellect, représentée par le signe ༓. Les actions précédées de cette icône ont pour vous plus de chance de réussir que les autres. ]


    `,
    actions: [
      {
        text: `Tenter d'apaiser le trouble manifeste qui étreint cet homme.`,
        stat: 'intellect',
        targetSuccess: 21,
        targetFailure: 22,
      },
    ],
  },
  {
    id: 21,
    title: 'intro-PYG-door-convince-success',
    description: `
        > «Bonjour, cher employé !», déclarez-vous sans vous laisser démonter, un sourire aux lèvres et le pied dans l'encadrure de la porte. "Auriez-vous le temps de répondre à un questionnaire de satisfaction ?»

        > Le bougre s'attendait à beaucoup de chose, mais pas à cela. Dans son regard, la peur fait face à la confusion.

        > «Il y a un tirage au sort à la fin et des lots à gagner, vous savez. A votre place, j'essaierai de récupérer l'aspirateur, votre appartement a l'air d'en avoir besoin. Sans vouloir vous offenser.»

        > La confusion est à son tour remplacée par un agaçement.

        > «Navré, mais je suis occupé. Une bonne soirée à vous» répond-t-il en baissant son arme, posant une main sur la poignée de la porte pour vous la refermer au nez. C'est le moment idéal pour durcir un peu votre réthorique.

    `,
    actions: [
      {
        text: `Achever de le convaincre en usant d'arguments percutants.`,
        targetSuccess: 23,
      },
    ],
  },
  {
    id: 22,
    title: 'intro-PYG-door-convince-fail',
    description: `
      > «Bonjour, cher employé !», déclarez-vous sans vous laisser démonter, un sourire aux lèvres et le pied dans l'encadrure de la porte. «Auriez-vous le temps de répondre à un questionnaire de satisfaction ?»

      > Le bougre s'attendait à beaucoup de chose, mais pas à cela. Dans son regard, la peur fait face à la confusion. Puis un détail vous trahit. Retrospectivement, vous vous demandez encore ce qui a pu se passer, mais votre diatribe est interrompue par le cliquètement d'une gâchette, qui, grâce à votre bonne fortune, n'est pas accompagné par des éclaboussures de matière grise aux alentours.

      [Votre action a échoué. Dans ce tutoriel, cela n'aura aucune influence, mais plus tard, il vous faudra subir les conséquences de vos actions.]

  `,
    actions: [
      {
        text: `Profiter de cet instant de flottement pour le mettre hors d'état de nuire.`,
        targetSuccess: 23,
      },
    ],
  },
  {
    id: 23,
    title: 'intro-PYG-suitcase-noggin',
    description: `
    > C'est donc avec toute la désinvolture dont vous êtes capable — une quantité considérable —  que vous lancez votre attaché case blindé au visage du programmeur. Vous le désarmez  aussitôt alors qu'il lâche son arme pour porter la main à son visage ensanglanté.

    > « On dirait que ça n'est pas votre jour de chance, monsieur Horst. Asseyez-vous.»

    > Al Capone, disait-on, avait déclaré un jour que demander poliment, une arme à la main, fonctionnait toujours mieux que se contenter de demander poliment. S'il est vrai que l'on avait vu mieux comme maître à penser, cette maxime particulière avait toujours résonné dans votre esprit. Vous aviez eu l'occasion de la mettre en pratique lors de votre longue carrière, et elle s'applique particulièrement à la situation présente.

    > « Vous nous avez trahi » , déclarez-vous, polaire. « Vous auriez pu être l'un des prophètes d'un monde nouveau, le créateur du premier être conscient né de la main de l'homme. A la place, vous avez choisi...quoi, d'ailleurs ? La morale ? Imaginez-vous que nos concurrents sont plus vertueux que nous ? Imaginez-vous que des programmes similaires n'ont pas lieu dans d'autres laboratoires ?
    Nous vous avons tout donné, et vous l'avez dilapidé. Quelle différence pensiez-vous faire en vous retournant vers nous ? La marche du monde n'en sera pas arrêtée, pas même un seul instant. Le Progrès aura lieu, avec ou sans vous. »

    > Le programmeur se relève, son regard bleu fixé dans le vôtre, avant de déclarer avec conviction : « Je vais te dire ce que cela change, agent de Pygmalion. En faisant cela, je me suis assuré que jamais je ne ressemblerai aux gens comme vous. Si j'avais été un peu plus rapide, j'aurai pu vivre avec cette conviction. Mais puisque tu es là, je me contenterai de mourir avec. Fais donc ton office, sicaire. Tu n'auras pas un mot de plus.»
  `,
    actions: [
      {
        text: `Puisque c'est si gentiment demandé, vous exécutez. Et l'exécutez aussi, par la même occasion.`,
        targetSuccess: 24,
      },
    ],
  },
  {
    id: 24,
    title: 'intro-PYG-ending',
    description: `
    > Après avoir abattu l'informaticien, vous allumez son ordinateur afin d'y lancer un programme de votre conception, formatant le disque dur de manière à ce que nul ne puisse récupérer.
    Avant cela, vous en effectuez une copie complète, au cas où vous devriez faire chanter votre employeur pour une raison ou pour une autre.

    > Vous faîtes un petit tour dans la salle de bain pour nettoyer une tâche de sang sur votre veston, et vous croisez brièvement votre regard dans le miroir. Vous repensez aux mots de votre client de ce soir, puis vous froncez les sourcils avant de ranger votre arme dans votre étui.

    > Vous en avez terminé ici.
  `,
    actions: [
      {
        text: `Partir.`,
        targetSuccess: 25,
      },
    ],
  },
  {
    id: 25,
    title: 'intro-NL-end',
    description: `
      > Le ciel est recouvert de nuage menaçants, il est évident que la pluie ne va pas tarder à tomber. A cette heure, l'enclave corporatistes grouile encore de monde. Dans une ruelle près d'une boîte de nuit, vous apercevez une escouade de sécurité Pygmalion en train de pousser un employé contre un mur avant de le fouiller sous la menace d'une arme.

      > La silhouette de la compagnie d'assurance finit par se découper contre le ciel nocturne alors que les effluves épicées d'un restaurant asiatique viennent emplir vos narines.

      > La porte de votre berline claque et vous rajustez votre cravate. La nuit va être longue.
  `,
    actions: [
      {
        text: `To be continued.`,
        targetSuccess: 19,
      },
    ],
  },
];
