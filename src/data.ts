// portfolio_item: [{
//     imageSource:,
//     title:,
//     equipment:,
//     description:,
// },
// {
//     imageSource:,
//     title:,
//     equipment:,
//     description:,
// }]

let portfolio_lists: Object[] = [];

class portfolio {
  imageSource: string;
  title: string;
  equipment: string;
  description: string;

  constructor(
    image: string,
    title: string,
    equipment: string,
    description: string
  ) {
    this.imageSource = image;
    this.title = title;
    this.equipment = equipment;
    this.description = description;
  }

  // portfolio_lists.push(portfolio);
}

//let photo = new portfolio("sddasdsa","fsfdsfds","fsfdsfdsf","fdfdsfds");
console.log(portfolio);
