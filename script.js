const criteria = [
       "Proximité des transports publics (1-10)",
       "Nombre de bacheliers annuel",
       "Nombre d'établissements d'enseignement supérieur",
       "Nombre d'étudiants",
       "Prix de location des bureaux (€/m²/an)",
       "Prix de location de logements (€/m²)",
       "Croissance démographique (%)",
       "Croissance du nombre d'entreprises (%)",
       "Nombre de liaisons ferroviaires avec Paris",
       "Nombre d'établissements culturels",
       "Nombre de lieux de divertissement",
       "Croissance de la population étudiante (%)",
       "Budget d'investissement de la collectivité (M€)",
       "Secteurs d'activité dominants",
       "Taux de chômage (%)",
       "Couverture fibre optique (%)",
       "Couverture 5G (%)",
       "Nombre d'incubateurs",
       "Nombre de pôles de compétitivité",
       "Coût de la vie étudiant (€/mois)",
       "Nombre d'étudiants internationaux",
       "Espaces verts (hectares)",
       "Réseau de pistes cyclables (km)"
   ];

   let cities = [];

   function createCityCard(cityIndex) {
       const cityCard = document.createElement('div');
       cityCard.className = 'city-card';
       cityCard.innerHTML = `
           <input type="text" class="city-name" value="Ville ${cityIndex + 1}">
           <table>
               <tr>
                   <th>Critère</th>
                   <th>Valeur</th>
               </tr>
               ${criteria.map((criterion, i) => `
                   <tr>
                       <td>${criterion}</td>
                       <td><input type="text" data-criterion="${i}"></td>
                   </tr>
               `).join('')}
           </table>
           <button class="remove-city">Supprimer cette ville</button>
       `;

       cityCard.querySelector('.remove-city').addEventListener('click', () => removeCity(cityIndex));

       return cityCard;
   }

   function addCity() {
       const cityIndex = cities.length;
       cities.push({ name: `Ville ${cityIndex + 1}`, scores: Array(criteria.length).fill('') });
       const cityCard = createCityCard(cityIndex);
       document.getElementById('cities-container').appendChild(cityCard);
   }

   function removeCity(index) {
       if (cities.length > 1) {
           cities.splice(index, 1);
           renderCities();
       }
   }

   function renderCities() {
       const container = document.getElementById('cities-container');
       container.innerHTML = '';
       cities.forEach((city, index) => {
           container.appendChild(createCityCard(index));
       });
   }

   document.getElementById('add-city').addEventListener('click', addCity);

   // Initialize with one city
   addCity();
