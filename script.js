const modal = () => {
	const modalwindow = document.createElement('div')
	modalwindow.classList.add('modal')
	modalwindow.insertAdjacentHTML('afterbegin', `
		<div class="modal__overlay"></div>
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Авторизация</h5>
				</div>
				<div class="modal-body">
					<form id="auth-form">

						<div class="label">
							<input type="email" id="email" required>
							<label for="email">Email</label>
						</div>
						<div class="label">
							<input type="password" id="password" required>
							<label for="password">Password</label>
						</div>
						<button type="submit"> Sign </button>
				
					</form>
				</div>
			</div>
	
	`)
	document.body.appendChild(modalwindow)
	return modalwindow
}
modal()

const buttonOpen = document.getElementById('modal-btn'),
	modalWindow = document.querySelector('.modal'),
	overlay = document.querySelector('.modal__overlay')


document.getElementById('auth-form').addEventListener('submit', authFormHandler, { once: true })


function authFormHandler(e) {
	e.preventDefault()
	const email = e.target.querySelector('#email').value
	const password = e.target.querySelector('#password').value
	console.log(email, password);
}






buttonOpen.addEventListener('click', () => {
	modalWindow.classList.add('open')
})
overlay.addEventListener('click', () => {
	modalWindow.classList.remove('open')
})