import { EventIcon } from '../../icons/EventIcon';

export interface IEmptyStateProps {
  IconComponent?: React.ElementType;
  noDataText?: string;
  noDataSubText?: string;
}

const EmptyState: React.FC<IEmptyStateProps> = ({
  IconComponent = EventIcon,
  noDataText = "There's no data for this insight",
  noDataSubText = "Make sure you selected the correct events and timerange",
}) => {
  return (
    <div className="flex h-[300px] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-1 text-center">
        <div className="mb-3 rounded-full border p-3">
          <IconComponent className="size-6 text-purple-500" />
        </div>
        <p className="text-sm font-medium">{noDataText}</p>
        <p className="text-sm text-gray-600">
          {noDataSubText}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
