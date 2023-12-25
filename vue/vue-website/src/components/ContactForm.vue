<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <!-- Name input -->
    <MDBInput
      type="text"
      label="Name"
      id="form4Name"
      v-model="form4Name"
      wrapperClass="mb-4"
      required
    />

    <!-- Email input -->
    <MDBInput
      type="email"
      label="Email address"
      id="form4Email"
      v-model="form4Email"
      wrapperClass="mb-4"
      required
    />

    <!-- Subject input -->
    <MDBInput
      label="Subject"
      id="form4Subject"
      v-model="form4Subject"
      wrapperClass="mb-4"
      required
    />

    <!-- Message input -->
    <MDBTextarea
      label="Message"
      id="form4Textarea"
      v-model="form4Textarea"
      wrapperClass="mb-4"
      required
    />

    <!-- reCAPTCHA -->
    <div v-if="!isHuman">
      <p class="recaptcha-fail">reCAPTCHA verification failed. Please ensure you are not a bot.</p>
    </div>
    <div id="recaptcha-placeholder"></div>

    <!-- Submit button -->
    <MDBBtn block class="mb-4" type="submit" :disabled="!isHuman"> Send </MDBBtn>
  </form>
</template>

<script setup lang="ts">
import { MDBInput, MDBBtn, MDBTextarea } from 'mdb-vue-ui-kit'
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

const form4Name = ref('')
const form4Email = ref('')
const form4Subject = ref('')
const form4Textarea = ref('')
const isHuman = ref(false)

const RECAPTCHA_SITE_KEY = '6LefgTspAAAAAP-MMSKwQJipzhr_dEdtJTzaAHUm'
const EMAILJS_SERVICE_ID = 'service_gdszpy1'
const EMAILJS_TEMPLATE_ID = 'template_czq9b2t'
const EMAILJS_USER_ID = 'HijV1CR_uVeS_0V-8'

declare const grecaptcha: {
  ready(callback: () => void): void
  execute(siteKey: string, options: { action: string }): Promise<{ score: number }>
}

// Calls reCAPTCHA v3 when the component is mounted
onMounted(() => {
  try {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true

    script.onload = () => {
      grecaptcha.ready(() => {
        // Sets up reCAPTCHA callback
        grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: 'homepage' })
          .then((recaptchaResponse) => {
            console.log('reCAPTCHA Response:', recaptchaResponse)

            // Sets isHuman based on desired score threshold
            isHuman.value = recaptchaResponse.score > 0.5
          })
          .catch((error) => {
            console.error('Error fetching reCAPTCHA response:', error)
          })
      })
    }

    document.head.appendChild(script)
  } catch (error) {
    console.error('Error loading reCAPTCHA script:', error)
  }
})

/* Submits form */
const submitForm = async () => {
  if (isHuman.value) {
    // Tries to send email
    try {
      const templateParams = {
        to_name: 'Juan',
        from_name: form4Name.value,
        from_email: form4Email.value,
        subject: form4Subject.value,
        message: form4Textarea.value
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      )

      console.log('Email sent successfully:', response)

      // Reset form fields after successful submission
      form4Name.value = ''
      form4Email.value = ''
      form4Subject.value = ''
      form4Textarea.value = ''
    } catch (error) {
      console.error('Error sending email:', error)
    }
  } else {
    // Handles the case where reCAPTCHA v3 score is not high enough
    console.error('reCAPTCHA v3 score is too low. Please verify that you are not a bot.')
  }
}
/* Submits form */
</script>

<style scoped>
.contact-form {
  width: 70%;
}
.btn {
  --mdb-btn-bg: var(--mdb-primary) !important;
  --mdb-btn-color: white !important;
}
.btn:hover {
  background-color: var(--accent-three);
}

.recaptcha-fail {
  padding: 0.5rem;
  color: white;
  background-color: rgba(255, 0, 0, 0.5);
  border-radius: 0.5rem;
}

@media (min-width: 992px) {
  /* Styling for Image section */
  .contact-form {
    width: 25%;
  }
  /* Styling for Image section */
}
</style>
