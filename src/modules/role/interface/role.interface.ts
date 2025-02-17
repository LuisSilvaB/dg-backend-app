import { Permission } from '@/entities/Permission.entity';

export interface Role {
  id: number;
  name: string;
  permissions: Permission[];
}
