let products = [
    { id: 1, name: 'Cadbury Black Forest', price: 100,image:"image 1.jpeg" },
    { id: 2, name: 'Cadbury Silk Chocolate', price: 120,image:"image 2.webp" },
    { id: 3, name: 'Cadbury Cookie Special', price: 140,image:"image3.jpeg"},
    { id: 4, name: 'Cadbury Cofee Almond', price: 140 ,image:"image4.jpeg"},
    { id: 5, name: 'Cadbury Fudge Special ', price: 150 ,image:"image 5.jpeg"}

  ];

  const cardContainer = document.getElementById('card-container');
  const totalPriceElement = document.getElementById('total-price');


  function renderCards() {
    cardContainer.innerHTML = ''

    
    products.map((product) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%; height:auto;">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button class="delete-btn" data-id="${product.id}">Delete</button>
      `;
      cardContainer.appendChild(card);
    });



    document.querySelectorAll('.delete-btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        deleteCard(id);
      });
    });
  }

  
  function deleteCard(id) {
  
    products = products.filter((product) => product.id !== id);
    renderCards();
  }

  renderCards();