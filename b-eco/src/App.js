import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SnakeGame from './components/SnakeGame';
import Logo from './Assets/Logo.png'


function App() {
  return (
    <div className="App">
      <Header/>
      <section className="content-Wrapper">
        <section className="QS" id='QS'>
          <section>
              <h2>¿Quienes somos?</h2>
              <p className='text-center text-white'>Excepturi est tenetur consequatur maxime autem dolorum provident. Molestiae natus quo non aliquid voluptates ut harum eveniet. Ea omnis possimus sit quia eos quod quo. Dicta voluptatibus iste esse commodi ea quidem consequatur fugiat architecto autem rerum dolores ducimus qui quo. Ipsum sint atque voluptatum quasi commodi quasi eligendi tenetur deserunt vero. Et et neque aut ut. Voluptatum facilis quis ut enim consequatur dolorem ratione quas sunt quia. Quibusdam rem fuga beata sit veniam et est odio iure pariatur est dolorem ducimus esse. Dolorem deleniti debitis voluptatem velit aut dolorum voluptatem quia sunt rerum dolorum ut voluptas. Molestias itaque nihil illum temporibus sed recusandae tempore eligendi omnis ut ut. Repellendus animi ut ipsa qui nihil id nihil distinctio odit ut rem cupiditate. Incidunt sit hic sit iusto reiciendis unde. Assumenda enim ex pariatur non est voluptatibus nihil. Ut impedit consequatur qui iure ducimus rem repellat reiciendis qui dignissimos similique. Quia qui quasi esse. Ut et velit voluptatem qui. Provident et quidem sed qui est sint fugit illo corrupti harum quae ipsam ut. Distinctio ut et maiores.</p>
          </section>
        </section>
        <section className="content-section" id="Proyectos">
          <section>
              <h2>¿Qué hacemos?</h2>
              <p>Excepturi est tenetur consequatur maxime autem dolorum provident. Molestiae natus quo non aliquid voluptates ut harum eveniet. Ea omnis possimus sit quia eos quod quo. Dicta voluptatibus iste esse commodi ea quidem consequatur fugiat architecto autem rerum dolores ducimus qui quo. Ipsum sint atque voluptatum quasi commodi quasi eligendi tenetur deserunt vero. Et et neque aut ut. Voluptatum facilis quis ut enim consequatur dolorem ratione quas sunt quia. Quibusdam rem fuga beata sit veniam et est odio iure pariatur est dolorem ducimus esse. Dolorem deleniti debitis voluptatem velit aut dolorum voluptatem quia sunt rerum dolorum ut voluptas. Molestias itaque nihil illum temporibus sed recusandae tempore eligendi omnis ut ut. Repellendus animi ut ipsa qui nihil id nihil distinctio odit ut rem cupiditate. Incidunt sit hic sit iusto reiciendis unde. Assumenda enim ex pariatur non est voluptatibus nihil. Ut impedit consequatur qui iure ducimus rem repellat reiciendis qui dignissimos similique. Quia qui quasi esse. Ut et velit voluptatem qui. Provident et quidem sed qui est sint fugit illo corrupti harum quae ipsam ut. Distinctio ut et maiores.</p>
          </section>
        </section>
        <section className="content-section" id="Siguenos">
          <section>
              <h2>Sigue nuestras acciones</h2>
              <p>Inventore corporis quis saepe quaerat aliquam enim repudiandae adipisci velit nemo. Sint magnam autem repellendus quis deleniti quo accusamus commodi ut enim aspernatur quod et. Sed enim eos id nesciunt et alias consectetur ut eos ex nisi beatae quasi blanditiis. Dolorem iste est dolorem corrupti qui laborum. Odit quis aut autem modi sed perspiciatis qui dolore quidem in at. Velit dolor nihil nesciunt maiores vero magnam dolorem libero quia culpa. Iure ut minima at id eos doloremque totam quasi in aspernatur et illo enim qui pariatur.</p>
              <h3 className="contact-email">@grupoestudiantil_b.eco</h3>
          </section>
        </section>
        <section className="content-section" id="Snakegame">
          <section>
              <h2>SNAKE GAME</h2>
              <p>Ayudanos a recolectar desechos!</p>
              <SnakeGame />
          </section>
        </section>
        <section className="content-section" id="Alianzas">
          <section>
              <h2>Alianzas</h2>
              <p>Excepturi est tenetur consequatur maxime autem dolorum provident. Molestiae natus quo non aliquid voluptates ut harum eveniet. Ea omnis possimus sit quia eos quod quo. Dicta voluptatibus iste esse commodi ea quidem consequatur fugiat architecto autem rerum dolores ducimus qui quo. Ipsum sint atque voluptatum quasi commodi quasi eligendi tenetur deserunt vero. Et et neque aut ut. Voluptatum facilis quis ut enim consequatur dolorem ratione quas sunt quia. Quibusdam rem fuga beata sit veniam et est odio iure pariatur est dolorem ducimus esse. Dolorem deleniti debitis voluptatem velit aut dolorum voluptatem quia sunt rerum dolorum ut voluptas. Molestias itaque nihil illum temporibus sed recusandae tempore eligendi omnis ut ut. Repellendus animi ut ipsa qui nihil id nihil distinctio odit ut rem cupiditate. Incidunt sit hic sit iusto reiciendis unde. Assumenda enim ex pariatur non est voluptatibus nihil. Ut impedit consequatur qui iure ducimus rem repellat reiciendis qui dignissimos similique. Quia qui quasi esse. Ut et velit voluptatem qui. Provident et quidem sed qui est sint fugit illo corrupti harum quae ipsam ut. Distinctio ut et maiores.</p>
              <section className="alianzas-container">
                <section className="alianza-item">
                  <img src={Logo} alt="Partner"/>
                </section>
                <section className="alianza-item">
                  <img src={Logo} alt="Partner" className="w-40 h-40 saturate-0 object-contain"/>
                </section>
              </section>
          </section>
        </section>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
