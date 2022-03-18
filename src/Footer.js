const Footer = () => {
	const today = new Date();
	return (
		<footer className="Footer">
			<p>Copyright Aman Shivhare &copy; {today.getFullYear()}</p>
		</footer>
	);
};

export default Footer;
