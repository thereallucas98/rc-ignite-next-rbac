'use server'

import { Role } from '@acl/auth'
import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { revokeInvite } from '@/http/invites/revoke-invites'
import { removeMember } from '@/http/members/remove-member'
import { updateMember } from '@/http/members/update-member'

export async function removeMemberAction(memberId: string) {
  const currentOrg = await getCurrentOrg()

  await removeMember({
    org: currentOrg!,
    memberId,
  })

  revalidateTag(`${currentOrg}/members`)
}

export async function updateMemberAction(memberId: string, role: Role) {
  const currentOrg = await getCurrentOrg()

  await updateMember({
    org: currentOrg! ?? '',
    memberId,
    role,
  })

  revalidateTag(`${currentOrg}/members`)
}

export async function revokeInviteAction(inviteId: string) {
  const currentOrg = await getCurrentOrg()

  await revokeInvite({
    org: currentOrg!,
    inviteId,
  })

  revalidateTag(`${currentOrg}/invites`)
}
