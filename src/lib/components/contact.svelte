<script>
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
  <div class="flex justify-center items-center ml-16 lg:py-20 w-4/5 flex-wrap">
    <a
      href={mailto}
      class="underline hover:text-primary-400 duration-300 text-6xl font-semibold text-primary-600 flex justify-center items-center w-full"
    >
      Lass uns gemeinsam loslegen
    </a>
    <div class="flex-1">
      <img src="" alt="" />
    </div>
  </div>
</div>
