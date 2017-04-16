import { DYNAMIC_FORM_CONTROL_TYPE_RATING, DynamicRatingModel } from "./rating.model";

describe("DynamicRatingModel test suite", () => {

    let model: DynamicRatingModel,
        config = {
            id: "rating",
            stars: 6,
            cancel: false,
            disabled: true,
            readonly: true
        };

    beforeEach(() => model = new DynamicRatingModel(config));

    it("should initialize correctly", () => {

        expect(model.disabled).toBe(true);
        expect(model.id).toEqual(config.id);
        expect(model.label).toBeNull();
        expect(model.name).toEqual(model.id);
        expect(model.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_RATING);
        expect(model.value).toBe(config.value);
        expect(model.stars).toEqual(6);
    });

    it("should serialize correctly", () => {

        let json = JSON.parse(JSON.stringify(model));

        expect(json.id).toEqual(model.id);
        expect(json.value).toBe(model.value);
        expect(json.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_SLIDER);
    });
});