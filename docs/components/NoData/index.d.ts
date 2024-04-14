/// <reference types="react" />
interface IEmptyStateProps {
    IconComponent?: React.ElementType;
    noDataText?: string;
    noDataSubText?: string;
}
declare const EmptyState: React.FC<IEmptyStateProps>;
export default EmptyState;
