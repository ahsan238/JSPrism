function getWindowSize() {
    return r.isNumber(l.innerWidth) && r.isNumber(l.innerHeight) ? this.validateSize(l.innerWidth, l.innerHeight) : !r.isUndefined(d.body) && r.isNumber(d.body.offsetWidth) && r.isNumber(d.body.offsetHeight) ? this.validateSize(d.body.offsetWidth, d.body.offsetHeight) : null
}