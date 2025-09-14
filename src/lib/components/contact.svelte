<script>
  import { MapPin, Mail, PhoneIcon, Instagram } from 'lucide-svelte'
  import HannesScheibelauerCrazy from '$lib/img/HannesLaptopStart.webp?enhanced'
  const email = 'kontakt@hannes-scheibelauer.at'
  const subject = 'Interesse an einer Zusammenarbeit'

  const body = `Hallo Hannes,

ich bin an einer Zusammenarbeit interessiert und möchte gemeinsam mit dir eine moderne und wirkungsvolle Online-Präsenz entwickeln. 
Ich freue mich auf ein unverbindliches Erstgespräch, um die Details zu besprechen.

Viele Grüße,
[Ihr Name]`

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
</script>

<div class="w-full flex justify-center items-center mt-20" id="contact">
  <div
    class="flex justify-center items-center lg:ml-16 ml-10 lg:mr-0 mr-10 lg:flex-nowrap flex-wrap"
  >
    <div
      class="flex-2 flex flex-col gap-10 pb-10 lg:items-start lg:text-left text-left"
    >
      <h3 class="lg:text-5xl sm:text-4xl text-3xl font-bold lg:mb-6">
        Lass uns ein Projekt Starten!
      </h3>
      <div
        class="flex flex-col gap-10 lg:justify-normal justify-center items-start w-max"
      >
        <div
          class="flex justify-left items-center whitespace-nowrap gap-2 sm:gap-6"
        >
          <MapPin class="inline w-8 h-8 lg:w-10 lg:h-10" />
          <span
            class="font-semibold text-lg sm:text-xl lg:text-3xl xl:text-4xl text-gray-100"
            >3250 Mühling, Österreich</span
          >
        </div>
        <div class="flex items-center gap-2 sm:gap-6">
          <Mail class="inline w-8 h-8 lg:w-10 lg:h-10" />
          <a
            href={mailto}
            class="font-semibold text-lg sm:text-xl lg:text-3xl xl:text-4xl underline hover:text-primary-400 duration-300 whitespace-nowrap text-gray-100"
            >kontakt@hannes-scheibelauer.at</a
          >
        </div>
        <div class="flex items-center whitespace-nowrap gap-2 sm:gap-6">
          <PhoneIcon class="inline w-8 h-8 lg:w-10 lg:h-10" />
          <a
            href="tel:+4369912345678"
            class="font-semibold text-lg sm:text-xl lg:text-3xl underline hover:text-primary-400 duration-300 whitespace-nowrap xl:text-4xl text-gray-100"
            >0670 2018717</a
          >
        </div>
        <!--<div class="flex items-center l whitespace-nowrap gap-2 sm:gap-6">
          <Instagram class="inline w-8 h-8 lg:w-10 lg:h-10" />
          <a
            href="https://instagram.com/hannes.scheibelauer"
            target="_blank"
            rel="noopener"
            class="font-semibold text-lg sm:text-xl underline hover:text-primary-400 duration-300 whitespace-nowrap lg:text-3xl xl:text-4xl text-gray-100"
            >@hannes.scheibelauer</a
          >
        </div> -->
      </div>
    </div>
    <div class=" h-full lg:w-1/3">
      <enhanced:img
        src={HannesScheibelauerCrazy}
        alt="Hannes Scheibelauer Portrait photo"
        style="height: 100%; object-fit: contain; max-height: 500px;"
        class=" rounded-lg"
      />
    </div>
  </div>
</div>
