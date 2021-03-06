import { ValidatorChain } from '../validation'

/**
 * Set of validations that are applicable to objects.
 */
export default interface ObjectValidator<T> {
    /**
     * Creates a new validation pipeline for the given property of the input.
     *
     * @param property Property of the input to validate.
     */
    property<K extends keyof T>(property: K): ValidatorChain<T, T[K]>
}
