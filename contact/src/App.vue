<script>
import Parcel from 'single-spa-vue/parcel'
import { mountRootParcel } from 'single-spa'
export default {
  components: {
    Parcel
  },
  data() {
    return {
      parcelConfig: import('../../chat-parcel/src/main'),
      mountParcel: mountRootParcel,
      wrapWith: 'div',
      wrapStyle: {
        position: 'absolute',
        bottom: '60px',
        right: '60px'
      }
    }
  },
  methods: {
    getParcelProps() {
      return {
        initiator: `Contact Page (Vue Framework)`
      }
    },
    parcelMounted() {
      console.log("parcel mounted");
    },
    parcelUpdated() {
      console.log("parcel updated");
    }
  }
}
</script>
<template>
  <div class="main-container">
    <h2>Contact Page In the VueJS Framework</h2>
    <div class="contact-info">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us:</p>
      <div class="info">
        <a href="mailto:support@example.com">support@example.com</a>
      </div>
      <div class="info">
        <a href="tel:+1234567890">+1 (234) 567-890</a>
      </div>
      <div class="info">
        <address>13th StNew York, NY 10011, USA</address>
      </div>
    </div>
    <div>
      <Parcel v-on:parcelMounted="parcelMounted()" v-on:parcelUpdated="parcelUpdated()" :config="parcelConfig"
        :mountParcel="mountParcel" :wrapWith="wrapWith" :wrapClass="wrapClass" :wrapStyle="wrapStyle"
        :parcelProps="getParcelProps()" />
    </div>
  </div>

</template>

<style scoped>
.main-containder {
  text-align: center;
}

.contact-info {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
}

.info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

a {
  color: #007BFF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

address {
  margin: 0;
  font-style: normal;
}
</style>