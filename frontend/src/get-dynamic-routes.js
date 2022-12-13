const fs = require('fs');
const routes = require('./dynamic-routes.json');

const getRoutesList = (routes) => {

    let list = [];

    for (const [path, subPaths] of Object.entries(routes)) {
        console.log(path, subPaths);

        list.push(`/${path}`);

        if ( Array.isArray(subPaths) && subPaths.length !== 0 ) {
            for (const subPath of subPaths) {
                list.push(`/${path}/${subPath}`);
            }
        }
    }
    return list;
}

const getText = li => li.reduce((txt, route) => txt + `\n${route}`, '/');

const data = getText(getRoutesList(routes));

fs.writeFile("dynamic-routes.txt", data, e => e ? console.error(e) : null);
