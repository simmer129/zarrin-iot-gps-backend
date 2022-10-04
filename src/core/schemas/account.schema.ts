import { EntitySchema } from 'typeorm';
import { Account } from '../entity/account.entity';

export const AccountSchema = new EntitySchema<Account>({
    name: 'Account',
    target: Account,
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        title: {
            type: String,
        },
    }
});