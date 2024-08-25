fetch('../docs/nombres.json')
      .then(response => response.json())
      .then(data => {
        const contenedor = document.getElementById('contenedor');
        data.forEach(persona => {
          const personaDiv = document.createElement('div');
          personaDiv.classList.add('lista')
            personaDiv.innerHTML = `
                <h4>${persona.id}</h2>
                <h4>${persona.nombre}</h2>
                <p>Casa: ${persona.casa}</p>`;
            contenedor.appendChild(personaDiv);
        
         
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });