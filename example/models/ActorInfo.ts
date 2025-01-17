// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { actorId } from './Actor';
import type { ActorId } from './Actor';
import { z } from 'zod';

/** Represents the view public.actor_info */
export default interface ActorInfo {
  /** Database type: pg_catalog.int4 */
  actor_id: ActorId;

  /** Database type: pg_catalog.varchar */
  first_name: string;

  /** Database type: pg_catalog.varchar */
  last_name: string;

  /** Database type: pg_catalog.text */
  film_info: string;
}

export const actorInfo: z.Schema<ActorInfo> = z.object({
  actor_id: actorId,
  first_name: z.string(),
  last_name: z.string(),
  film_info: z.string(),
}) as any;
