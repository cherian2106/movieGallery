class Gallery extends Component
{
  constructor() {
    super();

    this.state = {
      query: '',
      pokemon: [],
    };
  }

  render(){
    return(
   <img className="GallCard" src={this.props.src}/>
    )
  }

}
