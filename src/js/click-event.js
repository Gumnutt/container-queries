const aside = document.getElementsByTagName('aside')[0]
document.addEventListener(
  'click',
  function (event) {
    const current_day = event.target.closest('.day')
    if (!event.target.closest('.day')) return

    if ((aside.childNodes.length = 0)) {
      aside.appendChild(current_day.cloneNode(true))
      current_day.classList.add('active')
    } else {
      aside.innerHTML = ''
      aside.appendChild(current_day.cloneNode(true))
      current_day.classList.add('active')
    }
  },
  false
)
