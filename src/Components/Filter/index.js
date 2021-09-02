import './style.css';

export const Filter = () => {

  return (

    <section className="filter">

      <section>

        <h5>Filters</h5>

        <section class="mb-4">

          <h6 class="font-weight-bold mb-3">Multi Range</h6>
          <div class="form-check pl-0 mb-3">
            <input type="radio" class="form-check-input" id="under25" name="materialExampleRadios" />
            <label class="form-check-label small text-uppercase card-link-secondary">$10</label>
          </div>
          <div class="form-check pl-0 mb-3">
            <input type="radio" class="form-check-input" id="2550" name="materialExampleRadios" />
            <label class="form-check-label small text-uppercase card-link-secondary">$10 - $100</label>
          </div>
          <div class="form-check pl-0 mb-3">
            <input type="radio" class="form-check-input" id="50100" name="materialExampleRadios" />
            <label class="form-check-label small text-uppercase card-link-secondary">$100 - $500</label>
          </div>
          <div class="form-check pl-0 mb-3">
            <input type="radio" class="form-check-input" id="100200" name="materialExampleRadios" />
            <label class="form-check-label small text-uppercase card-link-secondary">$500</label>
          </div>
          <div class="form-check pl-0 mb-3">
            <input type="radio" class="form-check-input" id="200above" name="materialExampleRadios" />
            <label class="form-check-label small text-uppercase card-link-secondary ">All</label>
          </div>

        </section>

        <section class="mb-4">

          <h6 class="font-weight-bold mb-3">Slider</h6>

          <div class="slider-price d-flex align-items-center my-4">
            <span class="font-weight-normal small text-muted mr-2">$0</span>
            <form class="multi-range-field w-100 mb-1">
              <input id="multi" class="multi-range" type="range" />
            </form>
            <span class="font-weight-normal small text-muted ml-2">$100</span>
          </div>

        </section>

        <section class="mb-4">

          <h6 class="font-weight-bold mb-3">Category</h6>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary" >Cell Phones</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Computers & Tablets</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Cell Phone Acessories</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Appliances</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Audio</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Iphone Acessories</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Cameras & Camcorders</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Iphone Cases & Clips</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">TV & Home Theater</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Small Kitchen Appliances</label>
          </div>

        </section>

        <section class="mb-4">

          <h6 class="font-weight-bold mb-3">Brand</h6>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary" >Insigni</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Samsung</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary" for="38">Apple</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">HP</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Sony</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Metra</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Dyne</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">LG</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Canon</label>
          </div>

          <div class="form-check pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" />
            <label class="form-check-label small text-uppercase card-link-secondary">Speck</label>
          </div>

        </section>


        <section class="mb-4">

          <h6 class="font-weight-bold mb-3">Rating</h6>

          <a href="#!">
            <ul class="rating">
              <li>
                <i class="fas fa-star fa-sm text-primary"></i><i class="fas fa-star fa-sm text-primary"></i><i class="fas fa-star fa-sm text-primary"></i><i class="fas fa-star fa-sm text-primary"></i><i class="far fa-star fa-sm text-primary"></i> <p>& Up</p>
              </li>
            </ul>
          </a>

          <a href="#!">
            <ul class="rating">
              <li>
                <i class="fas fa-star fa-sm text-primary"></i><i class="fas fa-star fa-sm text-primary"></i><i class="fas fa-star fa-sm text-primary"></i><i class="far fa-star fa-sm text-primary"></i><i class="far fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <p class="small text-uppercase card-link-secondary px-2">& Up</p>
              </li>
            </ul>
          </a>

          <a href="#!">
            <ul class="rating">
              <li>
                <i class="fas fa-star fa-sm text-primary"></i><i class="fas fa-star fa-sm text-primary"></i><i class="far fa-star fa-sm text-primary"></i><i class="far fa-star fa-sm text-primary"></i><i class="far fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <p class="small text-uppercase card-link-secondary px-2">& Up</p>
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