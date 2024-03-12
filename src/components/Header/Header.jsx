import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between mx-4 items-center mt-4 border-b-2'>
      <h1 className='text-4xl font-bold'>knowledge</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;