const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      Image: {
        filename: "listingImage",
        url: "https://th.bing.com/th/id/R.6d4ea53ed22786a281be0cd61d23ea00?rik=w2wznDRnw7jCDA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-YPnSfOxIJhY%2fUVTNJSdNSbI%2fAAAAAAAAAZk%2fQunZhhUYdTs%2fs1600%2f01-Sri-panwa-residence-villa-phuket-luxury-pool-villa-phuket-thailand.jpg&ehk=ihAhoGp%2bxVU%2fpMBTiy%2f2v%2bMK9deVi8790yBQ6bl0Je4%3d&risl=&pid=ImgRaw&r=0",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      Image: {
        filename: "listingImage",
        url: "https://mavibalirentals.com/wp-content/uploads/2019/09/16.jpg",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      Image: {
        filename: "listingImage",
        url: "https://th.bing.com/th/id/R.ce7a0edb38aba7529ba75e6bd223f880?rik=aGm6o2Tg7N5cDA&riu=http%3a%2f%2fhostedvillas.com%2fwp-content%2fuploads%2f2018%2f08%2fLDV033.jpg&ehk=QsvS5qB85hFg1xB%2b%2bDnZv9W8Y6aGcctCrwAH1WNbZ20%3d&risl=&pid=ImgRaw&r=0",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      Image: {
        filename: "listingImage",
        url: "https://th.bing.com/th/id/R.3e708a8bc3c2867a27827e2152346549?rik=nlAjOzj5LxO0CQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-0woc0Y_1PQo%2fT-8qj4E49iI%2fAAAAAAAACsc%2fOhb8bUOcf-s%2fs1600%2fVacation%2bvilla%2bLombok%2bIndonesia%2b2.jpg&ehk=ObyCbgtgKQAjGIBgHZfQf1lV%2fCzWlQC%2bO4rqoY5ICvQ%3d&risl=&pid=ImgRaw&r=0",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      Image: {
        filename: "listingImage",
        url : "https://www.crushpixel.com/big-static15/preview4/lake-como-with-luxury-villas-2125025.jpg",
      },
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      Image: {
        filename: "listingImage",
        url: "https://www.architectureartdesigns.com/wp-content/uploads/2014/06/437.jpg",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      Image: {
        filename: "listingImage",
        url: "https://i.pinimg.com/originals/02/9b/38/029b38770cb8d374ac7036808d095bf5.jpg",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      Image: {
        filename: "listingImage",
        url: "https://i.pinimg.com/originals/0b/d1/bd/0bd1bd5b8babe53ffec557cd4551d2a3.jpg",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      Image: {
        filename: "listingImage",
        url: "https://bellagiovillas.com/wp-content/uploads/2017/06/villa-del-balbianello-bellagio-villas.jpg",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      Image: {
        filename: "listingImage",
        url: "https://www.tourist-destinations.com/wp-content/uploads/2019/05/Beautiful-villa.jpg",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      Image: {
        filename: "listingImage",
        url: "https://media.juiceonline.com/wp-content/uploads/2018/03/29130842/retreat_casabrina1-1024x553.jpg",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      Image: {
        filename: "listingImage",
        url: "https://www.elitehavens.com/magazine/wp-content/uploads/2021/05/Header.jpg",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      Image: {
        filename: "listingImage",
        url: "https://i.pinimg.com/736x/c7/1d/bb/c71dbbaecf290472a75c433ef2bc71fd.jpg",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      Image: {
        filename: "listingImage",
        url: "https://th.bing.com/th/id/OIP.T4qkqJa7mVCp-kl1HgGzZwHaDj?rs=1&pid=ImgDetMain",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      Image: {
        filename: "listingImage",
        url: "https://th.bing.com/th/id/R.f18e3b57b09c32d584b97d62752db923?rik=T4Q7jgNfP%2fR8Lw&riu=http%3a%2f%2fwww.freshpalace.com%2fwp-content%2fuploads%2f2012%2f11%2fWaterfront-House-Australia.jpg&ehk=QAn6HjpV3B3qbyKt7GxHHZLQnkgU1GZO%2flLJnou9HEs%3d&risl=&pid=ImgRaw&r=0",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      Image: {
        filename: "listingImage",
        url: "https://th.bing.com/th/id/R.aeff3cff9c7d19d388e3a07dfc558ef4?rik=fngkzpv8JKREWw&riu=http%3a%2f%2fwww.selexium-luxury-rentals.com%2fapp%2fuploads%2f2021%2f11%2flocation-villa-luxe.jpg&ehk=7hniEfWe54xJo%2f9sxY0kLsVVIujl%2faUrT8anIO%2bUbuM%3d&risl=&pid=ImgRaw&r=0",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      Image: {
        filename: "listingImage",
        url:"https://th.bing.com/th/id/R.fdf0a73158b7d83b402dafa92d5842f8?rik=cN0CBAya8ILqow&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2021%2f04%2fluxury-villa-with-pool.jpg&ehk=ow%2bNA0ECzibBZxvW%2fVkaYDuh7YkM3RX%2f3SdsNdr82WE%3d&risl=&pid=ImgRaw&r=0",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      Image: {
        filename: "listingImage",
        url: "https://i.pinimg.com/originals/79/a9/ed/79a9edd4c809f0de3ea5848f6fbd4386.jpg",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      Image: {
        filename: "listingImage",
        url: "https://www.nobroker.in/blog/wp-content/uploads/2022/09/luxury-villas-in-chennai.jpg",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      Image: {
        filename: "listingImage",
        url: "https://cache.desktopnexus.com/thumbseg/1558/1558218-bigthumbnail.jpg",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      Image: {
        filename: "listingImage",
        url: "https://c8.alamy.com/comp/2F4K5RH/detail-of-entrance-of-modern-villa-beautiful-place-in-switzerland-in-the-canton-of-ticino-2F4K5RH.jpg",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      Image: {
        filename: "listingImage",
        url: "https://th.bing.com/th/id/R.a09f304eaa19323a0e04511e6f17dce7?rik=pNNzmerSE7HZ1w&riu=http%3a%2f%2flabeaujardine.com%2fwp-content%2fuploads%2f2016%2f06%2fmonet-garden-giverny-cr-alamy.jpg&ehk=A7kST4pcyATqMdd6qo2xVzdBT1ghLVajen4VNRifRA8%3d&risl=&pid=ImgRaw&r=0",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      Image: {
        filename: "listingImage",
        url: "https://www.superiorwallpapers.com/download/beautiful-villa-with-pool-and-sunbeds-1920x1200.jpg",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      Image: {
        filename: "listingImage",
        url:"https://assets.cntraveller.in/photos/610d0fe4791a56d67d201fff/master/w_1600%2Cc_limit/lead.jpg",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      Image: {
        filename: "listingImage",
        url: "https://www.rajavillaproperty.com/wp-content/uploads/2022/08/Villa-Merpati-47-WM.jpg",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      Image: {
        filename: "listingImage",
        url: "https://th.bing.com/th/id/R.70910701ebfdbab754700f2f9ed6cd21?rik=zX7X0oIKT9Z5WQ&riu=http%3a%2f%2fdata.1freewallpapers.com%2fdownload%2fluxurious-beach-villa-3840x2400.jpg&ehk=pRelvwpjEHAh5aV0L9icKU6n8AUT3NXRYlflo7d2Q8A%3d&risl=1&pid=ImgRaw&r=0",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      Image: {
        filename: "listingImage",
        url: "https://assets.cntraveller.in/photos/613a3b9481cc5a532dc70ff1/master/w_1600%2Cc_limit/outdoors.jpg",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      Image: {
        filename: "listingImage",
        url:"https://media.cntraveller.in/wp-content/uploads/2020/02/Aromiaa-villas-866x649.jpg",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      Image: {
        filename: "listingImage",
        url: "https://thumbs.dreamstime.com/b/beautiful-villa-2705994.jpg",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
  module.exports = { data: sampleListings };