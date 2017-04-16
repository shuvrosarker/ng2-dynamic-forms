import { ClsConfig } from "../dynamic-form-control.model";
import { DynamicFormValueControlModelConfig, DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { serializable } from "../../decorator/serializable.decorator";
import { isBoolean, isNumber } from "../../utils";

export const DYNAMIC_FORM_CONTROL_TYPE_RATING = "RATING";

export interface DynamicRatingModelConfig extends DynamicFormValueControlModelConfig<number> {
    stars?: number;
    cancel?: boolean;
    disabled?: boolean;
    readonly?: boolean;
}

export class DynamicRatingModel extends DynamicFormValueControlModel<number> {

    @serializable() stars: number | null;
    @serializable() cancel: boolean | null;
    @serializable() disabled: boolean | null;
    @serializable() readonly: boolean;

    @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_RATING;

    constructor(config: DynamicRatingModelConfig, cls?: ClsConfig) {

        super(config, cls);

        this.stars = isNumber(config.stars) ? config.stars : 5;
        this.cancel = isBoolean(config.cancel) ? config.cancel : true;
        this.disabled = isBoolean(config.disabled) ? config.disabled : false;
        this.readonly = isBoolean(config.readonly) ? config.readonly : false;
    }
}