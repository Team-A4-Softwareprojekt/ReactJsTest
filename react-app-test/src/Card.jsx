import logoImg from './assets/logo.png'

function Card(){
    return(
        <div className = "card">
            <img src= {logoImg} alt="logo" className='card-logo'></img>
            <h2 className='card-title'>Senpai</h2>
            <p className='card-text'>Super Coole und Inovative Lernplattform</p>
        </div>
    );
}
export default Card