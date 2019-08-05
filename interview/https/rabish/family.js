function marry(man, woman) {
  woman.husban = man;
  man.wife = woman;
  return {
    fater: man,
    month: woman
  }
}

let family = marry({
  name: 'John'
}, {
  name: 'Ann'
})

//            Global
//              |
//        Object(family)
//       |              |
//  Object(fater) <-> Object(month)     