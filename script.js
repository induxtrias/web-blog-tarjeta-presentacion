const blogs = [
      {
        titulo: "OpenAI Unveils New AI Model",
        descripcion: "OpenAI has announced a new AI model that surpasses previous capabilities.",
        enlace: "#news1",
        imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        contenido: "The new model, named 'Nova', is capable of generating more realistic text and images, and has shown significant improvements in reasoning tasks. It is expected to be integrated into various applications soon."
      },
      {
        titulo: "Global Tech Summit Concludes",
        descripcion: "The annual Global Tech Summit wrapped up with key discussions on AI and sustainability.",
        enlace: "#news2",
        imagen: "https://images.unsplash.com/photo-1517245386804-21941467761e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2glMjBzdW1taXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        contenido: "This year's summit focused on the ethical implications of AI and the role of technology in achieving global sustainability goals. Leaders from various tech companies and governments participated in the event."
      },
      {
        titulo: "New Breakthrough in Renewable Energy",
        descripcion: "Scientists have achieved a new breakthrough in solar panel efficiency.",
        enlace: "#news3",
        imagen: "https://images.unsplash.com/photo-1504983628068-664944919881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbmV3YWJsZSUyMGVuZXJneXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        contenido: "A new type of solar panel has been developed that can convert sunlight into electricity with an efficiency rate of over 40%, which is a significant improvement over current technologies. This could lead to more affordable and accessible renewable energy."
      },
      {
        titulo: "Space Agency Announces Mars Mission",
        descripcion: "A major space agency has announced plans for a manned mission to Mars.",
        enlace: "#news4",
        imagen: "https://images.unsplash.com/photo-1583480879142-72441e799104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        contenido: "The mission, scheduled for 2030, aims to establish a permanent research base on Mars. This ambitious project will involve international collaboration and is expected to provide valuable insights into the red planet."
      },
      {
        titulo: "New Study on Climate Change Impacts",
        descripcion: "A new study highlights the increasing impact of climate change on coastal regions.",
        enlace: "#news5",
        imagen: "https://images.unsplash.com/photo-1501854140801-50d0169895d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsaW1hdGUlMjBjaGFuZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        contenido: "The study reveals that rising sea levels and more frequent extreme weather events are posing a significant threat to coastal communities. Urgent action is needed to mitigate these effects."
      },
      {
        titulo: "Major City Implements Smart City Tech",
        descripcion: "A major city has implemented new smart city technologies to improve urban living.",
        enlace: "#news6",
        imagen: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        contenido: "The city has introduced smart traffic management systems, energy-efficient public lighting, and advanced waste management solutions. These technologies are expected to enhance the quality of life for residents and reduce the city's carbon footprint."
      },
    ];

    const cardContainer = document.querySelector('.card-container');
    const detailsContainer = document.querySelector('.blog-details-container');

    function createCard(blog) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-side card-front">
            <img src="${blog.imagen}" alt="${blog.titulo} Image">
            <h2>${blog.titulo}</h2>
            <p>${blog.descripcion}</p>
          </div>
          <div class="card-side card-back">
            <h2>Descripción</h2>
            <p>${blog.descripcion}</p>
            <a href="${blog.enlace}">Leer más</a>
          </div>
        </div>
      `;
      return card;
    }

    function createBlogDetail(blog) {
      const detail = document.createElement('div');
      detail.className = 'blog-detail';
      detail.id = blog.enlace.substring(1);
      detail.innerHTML = `
        <img src="${blog.imagen}" alt="${blog.titulo} Image">
        <h2>${blog.titulo}</h2>
        <p>${blog.contenido}</p>
      `;
      return detail;
    }

    blogs.forEach(blog => {
      const card = createCard(blog);
      cardContainer.appendChild(card);

      const detail = createBlogDetail(blog);
      detailsContainer.appendChild(detail);
    });
