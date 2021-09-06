import './style.css';

export const Filter = () => {

  return (

    <section className="filter">

      <section>

        <h5>Filters</h5>

        <section className="mb-4">

          <h6 className="font-weight-bold mb-3">Multi Range</h6>
          <div className="form-check pl-0 mb-3">
            <input type="radio" className="form-check-input" id="under25" name="materialExampleRadios" />
            <label className="form-check-label small text-uppercase card-link-secondary">$10</label>
          </div>
          <div className="form-check pl-0 mb-3">
            <input type="radio" className="form-check-input" id="2550" name="materialExampleRadios" />
            <label className="form-check-label small text-uppercase card-link-secondary">$10 - $100</label>
          </div>
          <div className="form-check pl-0 mb-3">
            <input type="radio" className="form-check-input" id="50100" name="materialExampleRadios" />
            <label className="form-check-label small text-uppercase card-link-secondary">$100 - $500</label>
          </div>
          <div className="form-check pl-0 mb-3">
            <input type="radio" className="form-check-input" id="100200" name="materialExampleRadios" />
            <label className="form-check-label small text-uppercase card-link-secondary">$500</label>
          </div>
          <div className="form-check pl-0 mb-3">
            <input type="radio" className="form-check-input" id="200above" name="materialExampleRadios" />
            <label className="form-check-label small text-uppercase card-link-secondary ">All</label>
          </div>

        </section>

        <section className="mb-4">

          <h6 className="font-weight-bold mb-3">Slider</h6>

          <div className="slider-price d-flex align-items-center my-4">
            <span className="font-weight-normal small text-muted mr-2">$0</span>
            <form className="multi-range-field w-100 mb-1">
              <input id="multi" className="multi-range" type="range" />
            </form>
            <span className="font-weight-normal small text-muted ml-2">$100</span>
          </div>

        </section>

        <section className="mb-4">

          <h6 className="font-weight-bold mb-3">Category</h6>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary" >Cell Phones</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Computers & Tablets</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Cell Phone Acessories</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Appliances</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Audio</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Iphone Acessories</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Cameras & Camcorders</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Iphone Cases & Clips</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">TV & Home Theater</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Small Kitchen Appliances</label>
          </div>

        </section>

        <section className="mb-4">

          <h6 className="font-weight-bold mb-3">Brand</h6>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary" >Insigni</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Samsung</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary" for="38">Apple</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">HP</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Sony</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Metra</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Dyne</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">LG</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Canon</label>
          </div>

          <div className="form-check pl-0 mb-3">
            <input type="checkbox" className="form-check-input filled-in" />
            <label className="form-check-label small text-uppercase card-link-secondary">Speck</label>
          </div>

        </section>


        <section className="mb-4">

          <h6 className="font-weight-bold mb-3">Rating</h6>

          <a href="#!">
            <ul className="rating">
              <li>
                <i className="fas fa-star fa-sm text-primary"></i><i className="fas fa-star fa-sm text-primary"></i><i className="fas fa-star fa-sm text-primary"></i><i className="fas fa-star fa-sm text-primary"></i><i className="far fa-star fa-sm text-primary"></i> <p>& Up</p>
              </li>
            </ul>
          </a>

          <a href="#!">
            <ul className="rating">
              <li>
                <i className="fas fa-star fa-sm text-primary"></i><i className="fas fa-star fa-sm text-primary"></i><i className="fas fa-star fa-sm text-primary"></i><i className="far fa-star fa-sm text-primary"></i><i className="far fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <p className="small text-uppercase card-link-secondary px-2">& Up</p>
              </li>
            </ul>
          </a>

          <a href="#!">
            <ul className="rating">
              <li>
                <i className="fas fa-star fa-sm text-primary"></i><i className="fas fa-star fa-sm text-primary"></i><i className="far fa-star fa-sm text-primary"></i><i className="far fa-star fa-sm text-primary"></i><i className="far fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <p className="small text-uppercase card-link-secondary px-2">& Up</p>
              </li>
            </ul>
          </a>

        </section>

      </section>

      <div>
        <button className="clear-button">Clear All Filters</button>
      </div>

    </section>
  );
};