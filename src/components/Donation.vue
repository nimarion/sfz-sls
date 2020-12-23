<template>
  <section class="hero" style="content-visibility: auto">
    <div class="hero-body">
      <div
        class="content container box"
        style="
          background-color: #b8c6db;
          background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
        "
      >
        <div class="columns is-vcentered">
          <div class="column is-6 is-narrow">
            <div class="container">
              <h1 class="subtitle">
                Wenn Sie unseren wissenschaftlichen Nachwuchs fördern wollen,
                würden wir uns über eine Spende sehr freuen.
              </h1>
              <div class="notification is-primary is-centered">
                <div class="buttons">
                  <b-button
                    tag="a"
                    href="https://www.paypal.com/donate?hosted_button_id=4KMWJ6UFENXKU"
                    target="_blank"
                    type="is-primary"
                    rel="noreferrer"
                    inverted
                    expanded
                    >Jetzt spenden!</b-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <b-image :src="require('@/assets/undraw_science.svg')"></b-image>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
