"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
function combine(a, b) {
    return {
        name: a.name,
        position: b.position,
        color: a.color,
        weight: b.weight
    };
}
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
//# sourceMappingURL=task2.js.map