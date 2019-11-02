import Operators from './expressions/operators'
import Conditions from './expressions/conditions'
import ChainEnd from './expressions/chain-end'

/**
 * Defines the return of a validator operations, which combines the validator
 * itself (T) and a set of operators, conditions and other utilities that
 * can be invoked after a validation.
 */
type ValidatorSyntax<V, T, P> = V &
    Operators<T, P> &
    Conditions<T, P> &
    ChainEnd<T>

export default ValidatorSyntax