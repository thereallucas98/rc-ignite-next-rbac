import { defineAbilityFor } from '@acl/auth'

const ability = defineAbilityFor({ role: 'ADMIN', id: 'aadd' })

const userCanInviteSomeoneElese = ability.can('get', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElese)
console.log(userCanDeleteOtherUsers)
console.log(userCannotDeleteOtherUsers)
