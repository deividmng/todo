//// creando la primera parte 

export const blankProjectLoad = () => {
    console.log('calling from blankProjectLoad');
    let projectsArray = []
    console.log('Pushin the telle name od projecr to the projectarray');
    let projectTitle = 'defatul Prohect';
    projectsArray.push({projectTitle});
    console.log(projectsArray);
    return{ projectsArray,projectTitle};
   
}