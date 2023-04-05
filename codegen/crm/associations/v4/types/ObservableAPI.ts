import { ResponseContext, RequestContext } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { BatchResponsePublicAssociationMultiWithErrors } from '../models/BatchResponsePublicAssociationMultiWithErrors';
import { BatchResponsePublicAssociationWithErrors } from '../models/BatchResponsePublicAssociationWithErrors';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public postCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchive(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchive(fromObjectType, toObjectType, batchInputPublicAssociation, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchive(rsp)));
            }));
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public postCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreate(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Observable<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors> {
        const requestContextPromise = this.requestFactory.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreate(fromObjectType, toObjectType, batchInputPublicAssociation, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreate(rsp)));
            }));
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicObjectId 
     */
    public postCrmV3AssociationsFromObjectTypeToObjectTypeBatchRead(fromObjectType: string, toObjectType: string, batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Observable<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti> {
        const requestContextPromise = this.requestFactory.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchRead(fromObjectType, toObjectType, batchInputPublicObjectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchRead(rsp)));
            }));
    }

}

import { TypesApiRequestFactory, TypesApiResponseProcessor} from "../apis/TypesApi";
export class ObservableTypesApi {
    private requestFactory: TypesApiRequestFactory;
    private responseProcessor: TypesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TypesApiRequestFactory,
        responseProcessor?: TypesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TypesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TypesApiResponseProcessor();
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType 
     * @param toObjectType 
     */
    public getCrmV3AssociationsFromObjectTypeToObjectTypeTypes(fromObjectType: string, toObjectType: string, _options?: Configuration): Observable<CollectionResponsePublicAssociationDefinitionNoPaging> {
        const requestContextPromise = this.requestFactory.getCrmV3AssociationsFromObjectTypeToObjectTypeTypes(fromObjectType, toObjectType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCrmV3AssociationsFromObjectTypeToObjectTypeTypes(rsp)));
            }));
    }

}
