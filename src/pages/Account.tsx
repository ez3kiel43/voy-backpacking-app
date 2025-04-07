import AccIcon from './../assets/account-icon_light.svg';

export const Account: React.FC = () => {
	return (
		<div className="w-full h-full font-extralight text-xl tracking-wide fade">
			<section className="border-b-4 border-white text-center w-4/5 mx-auto py-4">
				<img src={AccIcon} alt="Profile Icon" className="mx-auto" />
				<p>John Doe</p>
				<p>validemail@mail.com</p>
				<button className="inverted">Edit Credentials</button>
			</section>
			<section className="border-b-4 border-white text-center w-4/5 mx-auto py-4">
				<p>Birthday: yyyy-mm-dd</p>
				<p>Height: 168cm</p>
				<p>Weight: 92kg</p>
				<button className="inverted">Edit Info</button>
			</section>

			<section className="text-center w-4/5 mx-auto py-4">
				<button className="danger">Logout</button>
				<button className="danger">Delete Account</button>
			</section>
		</div>
	);
};
