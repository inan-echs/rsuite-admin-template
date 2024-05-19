/* eslint-disable @typescript-eslint/no-unused-vars */

interface Item {
  itemCode: string;
  itemType: number;
  itemName: string;
  itemDesc: string;
  gstInclusivePrice: boolean;
  price: number;
  taxable: boolean;
  onHand: number;
  inStock: boolean;
  discountable: boolean;
  active: boolean;
  itemCategoryId: number;
}

// Example usage:
export const items: Item[] = [
  {
    itemCode: '#043559',
    itemType: 1,
    itemName: 'Computer',
    itemDesc:
      'Copiose amplus depopulo consuasor arto celer coniuratio vicissitudo succedo tempore.\nAppello complectus sono dedecor clementia cupressus thesaurus cohaero necessitatibus amita.\nCrinis valetudo avarus numquam suffragium stultus decens cubo stillicidium mollitia.',
    gstInclusivePrice: true,
    price: 87.0,
    taxable: true,
    onHand: 635.41,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#072a22',
    itemType: 1,
    itemName: 'Car',
    itemDesc: 'Non comes pauci cogo cometes tam claro aperio textilis.',
    gstInclusivePrice: true,
    price: 486.0,
    taxable: true,
    onHand: 574.15,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#086c7e',
    itemType: 1,
    itemName: 'Hat',
    itemDesc:
      'Desino condico adiuvo veritas urbanus aranea cupressus ustulo dapifer fuga.\nCapillus thema acerbitas.\nTamen pauper assumenda terror magnam.\nTersus conqueror apparatus rem uberrime.\nCreber recusandae angustus argentum attonbitus suadeo argentum.',
    gstInclusivePrice: true,
    price: 509.0,
    taxable: true,
    onHand: 593.38,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#136062',
    itemType: 1,
    itemName: 'Towels',
    itemDesc:
      'Pauci suppellex compono tripudio arcesso curtus sub venio trepide vallum.\nTaceo cicuta testimonium atavus aegre certe fugiat doloremque.',
    gstInclusivePrice: true,
    price: 408.0,
    taxable: true,
    onHand: 78.73,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#1b3e3c',
    itemType: 1,
    itemName: 'Pants',
    itemDesc:
      'Caput atavus conscendo xiphias cavus.\nImpedit depopulo abduco argentum coniecto adsum amoveo cultura cubicularis.\nVoluntarius saepe tui unde ascit crux cresco stultus clam vae.\nDerideo suscipit solitudo vos claro alienus eaque depereo defluo tribuo.',
    gstInclusivePrice: true,
    price: 668.0,
    taxable: true,
    onHand: 553.53,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#2b0768',
    itemType: 1,
    itemName: 'Chicken',
    itemDesc:
      'Celer cumque arcesso autem alienus dignissimos.\nVoro curto carmen corroboro modi congregatio voluptates suffragium bardus.\nTricesimus amicitia cultura stips adsum vita amicitia atrox.\nVentito crur civitas versus statim studio sufficio incidunt tot suus.',
    gstInclusivePrice: true,
    price: 195.0,
    taxable: true,
    onHand: 167.29,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#2f7033',
    itemType: 1,
    itemName: 'Shirt',
    itemDesc:
      'Admitto patior via aeternus asperiores vestigium bene surgo summa.\nRerum est magnam.\nCaecus debeo doloribus vesper cumque corona dolores.',
    gstInclusivePrice: true,
    price: 266.0,
    taxable: true,
    onHand: 526.46,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#32203d',
    itemType: 1,
    itemName: 'Salad',
    itemDesc:
      'Corroboro aspernatur nesciunt callide non cognatus.\nSto vobis torrens conor texo sed error.\nThymbra atavus voluptas ad suffragium subiungo volup supplanto demoror facilis.\nCrebro talio abutor eligendi concedo curo coniuratio sui succurro.\nTemeritas triumphus aureus.',
    gstInclusivePrice: true,
    price: 961.0,
    taxable: true,
    onHand: 64.0,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#38370b',
    itemType: 1,
    itemName: 'Chicken',
    itemDesc:
      'Templum ab vitium decens bellum terga tergo.\nAnimadverto triumphus ut vigilo vinum delectatio circumvenio aliquid.',
    gstInclusivePrice: true,
    price: 974.0,
    taxable: true,
    onHand: 625.69,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#46510a',
    itemType: 1,
    itemName: 'Salad',
    itemDesc:
      'Delego conicio pauci placeat thorax creator cohibeo laboriosam degenero vapulus.\nAssentator bene adfectus tabula esse theatrum.\nCelebrer tandem temptatio aestivus adimpleo adstringo commodo.\nAtque aliquam thesaurus decretum atrocitas crur ambulo titulus amaritudo.\nProvident unde curto adamo verto.',
    gstInclusivePrice: true,
    price: 81.0,
    taxable: true,
    onHand: 112.64,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#47392e',
    itemType: 1,
    itemName: 'Towels',
    itemDesc:
      'Creptio quod adaugeo cernuus atavus truculenter credo.\nConturbo adipisci cernuus aequus cavus vesco deprecator demo crustulum sto.\nAbsconditus cohors aeger cunctatio.',
    gstInclusivePrice: true,
    price: 556.0,
    taxable: true,
    onHand: 199.52,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#476371',
    itemType: 1,
    itemName: 'Keyboard',
    itemDesc:
      'Complectus subseco deputo.\nCampana temporibus consectetur amicitia civis tardus.\nCapio beatae desipio suscipio cribro viduo acervus.\nSubnecto caelestis crudelis cavus adnuo vilitas quod cervus absconditus viscus.\nAncilla candidus vomica ascit cohaero.',
    gstInclusivePrice: true,
    price: 528.0,
    taxable: true,
    onHand: 228.92,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#4d4b11',
    itemType: 1,
    itemName: 'Ball',
    itemDesc:
      'Somnus arto synagoga cubitum terminatio depono.\nStrenuus accusator bis ara.\nDelibero delibero arceo cruciamentum.',
    gstInclusivePrice: true,
    price: 793.0,
    taxable: true,
    onHand: 451.3,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#527b58',
    itemType: 1,
    itemName: 'Salad',
    itemDesc:
      'Averto cruentus temporibus theca tepidus qui alter varietas autem.\nCogo admiratio pauper acsi vaco tamen deputo tempore.',
    gstInclusivePrice: true,
    price: 286.0,
    taxable: true,
    onHand: 317.28,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  },
  {
    itemCode: '#6d6f7e',
    itemType: 1,
    itemName: 'Bike',
    itemDesc:
      'Clam inflammatio utpote.\nEveniet terebro totam thalassinus.\nCumque vesco arx.\nSuadeo argentum custodia careo cinis utrimque convoco quasi varius.\nAdhaero depromo aliquam numquam tolero decens colo.',
    gstInclusivePrice: true,
    price: 387.0,
    taxable: true,
    onHand: 667.42,
    inStock: true,
    discountable: true,
    active: true,
    itemCategoryId: 0
  }
];
