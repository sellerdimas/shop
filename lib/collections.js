FullDay = new orion.collection('Visitors', {
  singularName: 'Visitors', // The name of one of these items
  pluralName: 'Visitors', // The name of more than one of these items
  link: {
    title: 'Visitors' 
  },

  tabular: {

    columns: [
       { 
        data: "ipAddress", 
        title: "Ip Address" 
      },
       { 
        data: "browser", 
        title: "Browser" 
      },
       { 
        data: "os", 
        title: "os" 
      },
       { 
        data: "city", 
        title: "city" 
      },
      { 
        data: "country", 
        title: "Country" 
      },
      { 
        data: "referer", 
        title: "Referer" 
      },
      { 
        data: "date", 
        title: "date" 
      }
    ]
  }
});


FullDay.attachSchema(new SimpleSchema({
   ipAddress: {
    type: String,
    optional: false,
    label: 'ipAddress ID',
  },
   browser: {
    type: String,
    optional: true,
    label: 'browser ID',
  },
   os: {
    type: String,
    optional: true,
    label: 'os ID',
  },
  city: {
    type: String,
    optional: true,
    label: 'city',
  },
  country: {
    type: String,
    optional: true,
    label: 'country',
  },
   referer: {
    type: String,
    optional: true,
    label: 'referer',
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }
}));




NewCollections = new orion.collection('newCollections', {
  singularName: 'New collections', // The name of one of these items
  pluralName: 'New collections', // The name of more than one of these items
  link: {
    title: 'New collections' 
  },

  tabular: {

    columns: [
       { 
        data: "tovarHeader", 
        title: "Header" 
      },
       { 
        data: "firma", 
        title: "Company" 
      },
       { 
        data: "akcii", 
        title: "akcii" 
      },
       { 
        data: "price", 
        title: "Price" 
      },
      { 
        data: "imgSrc", 
        title: "Main src" 
      },
      { 
        data: "smallImg1", 
        title: "Img1" 
      },
      { 
        data: "smallImg2", 
        title: "Img2" 
      },
      { 
        data: "white", 
        title: "White" 
      },
      { 
        data: "black", 
        title: "Black" 
      },
      { 
        data: "red", 
        title: "Red" 
      },
      { 
        data: "blue", 
        title: "Blue" 
      },
      { 
        data: "s", 
        title: "S" 
      },
      { 
        data: "m", 
        title: "M" 
      },
      { 
        data: "l", 
        title: "L" 
      },
      { 
        data: "xl", 
        title: "XL" 
      }
    
    ]
  }
});



NewCollections.attachSchema(new SimpleSchema({
   tovarHeader: {
    type: String,
    optional: false,
    label: 'tovarHeader',
  },
   firma: {
    type: String,
    optional: true,
    label: 'firma',
  },
   akcii: {
    type: String,
    optional: true,
    label: 'akcii',
  },
  price: {
    type: String,
    optional: false,
    label: 'price',
  },
  imgSrc: {
    type: String,
    optional: false,
    label: 'imgSrc',
  },
  smallImg1: {
    type: String,
    optional: true,
    label: 'Img1',
  },
  smallImg2: {
    type: String,
    optional: true,
    label: 'Img2',
  },
   white: {
    type: String,
    optional: true,
    label: 'white',
  },
   black: {
    type: String,
    optional: true,
    label: 'black',
  },
  red: {
    type: String,
    optional: true,
    label: 'red',
  },
  blue: {
    type: String,
    optional: true,
    label: 'blue',
  },
  s: {
    type: String,
    optional: true,
    label: 'S',
  },
  m: {
    type: String,
    optional: true,
    label: 'M',
  },
  l: {
    type: String,
    optional: true,
    label: 'L',
  },
  xl: {
    type: String,
    optional: true,
    label: 'XL',
  }


}));


Orders = new orion.collection('Orders', {
  singularName: 'Orders', // The name of one of these items
  pluralName: 'Orders', // The name of more than one of these items
  link: {
    title: 'Orders' 
  },

  tabular: {

    columns: [
       { 
        data: "header", 
        title: "model" 
      },
       { 
        data: "firma", 
        title: "brend" 
      },
       { 
        data: "price", 
        title: "price" 
      },
       { 
        data: "size", 
        title: "size" 
      },
      { 
        data: "color", 
        title: "color" 
      },
      { 
        data: "name", 
        title: "name" 
      },
      { 
        data: "number", 
        title: "number" 
      },
      { 
        data: "date", 
        title: "date"
      }
    ]
  }
});

Orders.attachSchema(new SimpleSchema({
   header: {
    type: String,
    optional: false,
    label: 'Model',
  },
   firma: {
    type: String,
    optional: true,
    label: 'firma',
  },
   price: {
    type: String,
    optional: true,
    label: 'price',
  },
  size: {
    type: String,
    optional: true,
    label: 'size',
  },
  color: {
    type: String,
    optional: true,
    label: 'color',
  },
   name: {
    type: String,
    optional: true,
    label: 'name',
    max: 20,
  },
   number: {
    type: String,
    optional: false,
    label: 'number',
    max: 20,
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }
}));