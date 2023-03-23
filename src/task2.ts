function getPromise (): Promise<Array<string | number>> {
    return new Promise((resolve) => {
      resolve(['Text', 50]);
    });
}
  
  getPromise ()
  .then((data) => {
    console.log(data);
  });

// --------------

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}  

function combine (a: Pick<AllType, 'name' | 'color'>, b: Pick<AllType, 'position' | 'weight'>) {
   return {
    name: a.name,
    position: b.position,
    color: a.color,
    weight: b.weight
   }
}

// --------------

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// --------------

class Component<T> {
   constructor (public props:T) {
  
    }
}

interface IProps {
    title: string
}
  
class Page extends Component<IProps> {
    pageInfo () {
      console.log(this.props.title);
    }
}
  
  
  

