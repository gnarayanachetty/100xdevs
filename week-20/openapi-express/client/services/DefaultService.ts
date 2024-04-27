/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Get a list of users
     * Retrieves a list of users, optionally filtered by name.
     * @param name Name filter for user lookup.
     * @returns User A list of users
     * @throws ApiError
     */
    public static getUsers(
        name?: string,
    ): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'name': name,
            },
        });
    }
}
