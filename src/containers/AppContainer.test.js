const AppContainer = require("./AppContainer")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Jean-Philippe", "Michael"], ["Edmond", "Anas", "Anas"], ["Jean-Philippe", "George", "Anas"]]
        inst = new AppContainer.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
